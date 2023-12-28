/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTournament } from "./graphql/queries";
import { updateTournament } from "./graphql/mutations";
const client = generateClient();
export default function TournamentUpdateForm(props) {
  const {
    id: idProp,
    tournament: tournamentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tournamentId: "",
    tournamentName: "",
    tournamentTags: "",
    tournamentLink: "",
    owner: "",
  };
  const [tournamentId, setTournamentId] = React.useState(
    initialValues.tournamentId
  );
  const [tournamentName, setTournamentName] = React.useState(
    initialValues.tournamentName
  );
  const [tournamentTags, setTournamentTags] = React.useState(
    initialValues.tournamentTags
  );
  const [tournamentLink, setTournamentLink] = React.useState(
    initialValues.tournamentLink
  );
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tournamentRecord
      ? { ...initialValues, ...tournamentRecord }
      : initialValues;
    setTournamentId(cleanValues.tournamentId);
    setTournamentName(cleanValues.tournamentName);
    setTournamentTags(cleanValues.tournamentTags);
    setTournamentLink(cleanValues.tournamentLink);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [tournamentRecord, setTournamentRecord] =
    React.useState(tournamentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTournament.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTournament
        : tournamentModelProp;
      setTournamentRecord(record);
    };
    queryData();
  }, [idProp, tournamentModelProp]);
  React.useEffect(resetStateValues, [tournamentRecord]);
  const validations = {
    tournamentId: [],
    tournamentName: [{ type: "Required" }],
    tournamentTags: [],
    tournamentLink: [{ type: "URL" }],
    owner: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          tournamentId: tournamentId ?? null,
          tournamentName,
          tournamentTags: tournamentTags ?? null,
          tournamentLink: tournamentLink ?? null,
          owner: owner ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTournament.replaceAll("__typename", ""),
            variables: {
              input: {
                id: tournamentRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TournamentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tournament id"
        isRequired={false}
        isReadOnly={false}
        value={tournamentId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tournamentId: value,
              tournamentName,
              tournamentTags,
              tournamentLink,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.tournamentId ?? value;
          }
          if (errors.tournamentId?.hasError) {
            runValidationTasks("tournamentId", value);
          }
          setTournamentId(value);
        }}
        onBlur={() => runValidationTasks("tournamentId", tournamentId)}
        errorMessage={errors.tournamentId?.errorMessage}
        hasError={errors.tournamentId?.hasError}
        {...getOverrideProps(overrides, "tournamentId")}
      ></TextField>
      <TextField
        label="Tournament name"
        isRequired={true}
        isReadOnly={false}
        value={tournamentName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tournamentId,
              tournamentName: value,
              tournamentTags,
              tournamentLink,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.tournamentName ?? value;
          }
          if (errors.tournamentName?.hasError) {
            runValidationTasks("tournamentName", value);
          }
          setTournamentName(value);
        }}
        onBlur={() => runValidationTasks("tournamentName", tournamentName)}
        errorMessage={errors.tournamentName?.errorMessage}
        hasError={errors.tournamentName?.hasError}
        {...getOverrideProps(overrides, "tournamentName")}
      ></TextField>
      <TextField
        label="Tournament tags"
        isRequired={false}
        isReadOnly={false}
        value={tournamentTags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tournamentId,
              tournamentName,
              tournamentTags: value,
              tournamentLink,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.tournamentTags ?? value;
          }
          if (errors.tournamentTags?.hasError) {
            runValidationTasks("tournamentTags", value);
          }
          setTournamentTags(value);
        }}
        onBlur={() => runValidationTasks("tournamentTags", tournamentTags)}
        errorMessage={errors.tournamentTags?.errorMessage}
        hasError={errors.tournamentTags?.hasError}
        {...getOverrideProps(overrides, "tournamentTags")}
      ></TextField>
      <TextField
        label="Tournament link"
        isRequired={false}
        isReadOnly={false}
        value={tournamentLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tournamentId,
              tournamentName,
              tournamentTags,
              tournamentLink: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.tournamentLink ?? value;
          }
          if (errors.tournamentLink?.hasError) {
            runValidationTasks("tournamentLink", value);
          }
          setTournamentLink(value);
        }}
        onBlur={() => runValidationTasks("tournamentLink", tournamentLink)}
        errorMessage={errors.tournamentLink?.errorMessage}
        hasError={errors.tournamentLink?.hasError}
        {...getOverrideProps(overrides, "tournamentLink")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tournamentId,
              tournamentName,
              tournamentTags,
              tournamentLink,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || tournamentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || tournamentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
