/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getMatch } from "./graphql/queries";
import { updateMatch } from "./graphql/mutations";
const client = generateClient();
export default function MatchUpdateForm(props) {
  const {
    id: idProp,
    match: matchModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    matchId: "",
    date: "",
    time: "",
    isTopGame: false,
    owner: "",
  };
  const [matchId, setMatchId] = React.useState(initialValues.matchId);
  const [date, setDate] = React.useState(initialValues.date);
  const [time, setTime] = React.useState(initialValues.time);
  const [isTopGame, setIsTopGame] = React.useState(initialValues.isTopGame);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = matchRecord
      ? { ...initialValues, ...matchRecord }
      : initialValues;
    setMatchId(cleanValues.matchId);
    setDate(cleanValues.date);
    setTime(cleanValues.time);
    setIsTopGame(cleanValues.isTopGame);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [matchRecord, setMatchRecord] = React.useState(matchModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMatch.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMatch
        : matchModelProp;
      setMatchRecord(record);
    };
    queryData();
  }, [idProp, matchModelProp]);
  React.useEffect(resetStateValues, [matchRecord]);
  const validations = {
    matchId: [],
    date: [{ type: "Required" }],
    time: [{ type: "Required" }],
    isTopGame: [],
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
          matchId: matchId ?? null,
          date,
          time,
          isTopGame: isTopGame ?? null,
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
            query: updateMatch.replaceAll("__typename", ""),
            variables: {
              input: {
                id: matchRecord.id,
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
      {...getOverrideProps(overrides, "MatchUpdateForm")}
      {...rest}
    >
      <TextField
        label="Match id"
        isRequired={false}
        isReadOnly={false}
        value={matchId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matchId: value,
              date,
              time,
              isTopGame,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.matchId ?? value;
          }
          if (errors.matchId?.hasError) {
            runValidationTasks("matchId", value);
          }
          setMatchId(value);
        }}
        onBlur={() => runValidationTasks("matchId", matchId)}
        errorMessage={errors.matchId?.errorMessage}
        hasError={errors.matchId?.hasError}
        {...getOverrideProps(overrides, "matchId")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matchId,
              date: value,
              time,
              isTopGame,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matchId,
              date,
              time: value,
              isTopGame,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.time ?? value;
          }
          if (errors.time?.hasError) {
            runValidationTasks("time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("time", time)}
        errorMessage={errors.time?.errorMessage}
        hasError={errors.time?.hasError}
        {...getOverrideProps(overrides, "time")}
      ></TextField>
      <SwitchField
        label="Is top game"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isTopGame}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              matchId,
              date,
              time,
              isTopGame: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.isTopGame ?? value;
          }
          if (errors.isTopGame?.hasError) {
            runValidationTasks("isTopGame", value);
          }
          setIsTopGame(value);
        }}
        onBlur={() => runValidationTasks("isTopGame", isTopGame)}
        errorMessage={errors.isTopGame?.errorMessage}
        hasError={errors.isTopGame?.hasError}
        {...getOverrideProps(overrides, "isTopGame")}
      ></SwitchField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matchId,
              date,
              time,
              isTopGame,
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
          isDisabled={!(idProp || matchModelProp)}
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
              !(idProp || matchModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
