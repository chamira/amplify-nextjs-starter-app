/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTvChannel } from "./graphql/queries";
import { updateTvChannel } from "./graphql/mutations";
const client = generateClient();
export default function TvChannelUpdateForm(props) {
  const {
    id: idProp,
    tvChannel: tvChannelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    channelId: "",
    channelName: "",
    channelAppImageName: "",
    channelWebImageName: "",
    owner: "",
  };
  const [channelId, setChannelId] = React.useState(initialValues.channelId);
  const [channelName, setChannelName] = React.useState(
    initialValues.channelName
  );
  const [channelAppImageName, setChannelAppImageName] = React.useState(
    initialValues.channelAppImageName
  );
  const [channelWebImageName, setChannelWebImageName] = React.useState(
    initialValues.channelWebImageName
  );
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tvChannelRecord
      ? { ...initialValues, ...tvChannelRecord }
      : initialValues;
    setChannelId(cleanValues.channelId);
    setChannelName(cleanValues.channelName);
    setChannelAppImageName(cleanValues.channelAppImageName);
    setChannelWebImageName(cleanValues.channelWebImageName);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [tvChannelRecord, setTvChannelRecord] =
    React.useState(tvChannelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTvChannel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTvChannel
        : tvChannelModelProp;
      setTvChannelRecord(record);
    };
    queryData();
  }, [idProp, tvChannelModelProp]);
  React.useEffect(resetStateValues, [tvChannelRecord]);
  const validations = {
    channelId: [],
    channelName: [{ type: "Required" }],
    channelAppImageName: [{ type: "Required" }],
    channelWebImageName: [{ type: "Required" }],
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
          channelId: channelId ?? null,
          channelName,
          channelAppImageName,
          channelWebImageName,
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
            query: updateTvChannel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: tvChannelRecord.id,
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
      {...getOverrideProps(overrides, "TvChannelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Channel id"
        isRequired={false}
        isReadOnly={false}
        value={channelId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelId: value,
              channelName,
              channelAppImageName,
              channelWebImageName,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.channelId ?? value;
          }
          if (errors.channelId?.hasError) {
            runValidationTasks("channelId", value);
          }
          setChannelId(value);
        }}
        onBlur={() => runValidationTasks("channelId", channelId)}
        errorMessage={errors.channelId?.errorMessage}
        hasError={errors.channelId?.hasError}
        {...getOverrideProps(overrides, "channelId")}
      ></TextField>
      <TextField
        label="Channel name"
        isRequired={true}
        isReadOnly={false}
        value={channelName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelId,
              channelName: value,
              channelAppImageName,
              channelWebImageName,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.channelName ?? value;
          }
          if (errors.channelName?.hasError) {
            runValidationTasks("channelName", value);
          }
          setChannelName(value);
        }}
        onBlur={() => runValidationTasks("channelName", channelName)}
        errorMessage={errors.channelName?.errorMessage}
        hasError={errors.channelName?.hasError}
        {...getOverrideProps(overrides, "channelName")}
      ></TextField>
      <TextField
        label="Channel app image name"
        isRequired={true}
        isReadOnly={false}
        value={channelAppImageName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelId,
              channelName,
              channelAppImageName: value,
              channelWebImageName,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.channelAppImageName ?? value;
          }
          if (errors.channelAppImageName?.hasError) {
            runValidationTasks("channelAppImageName", value);
          }
          setChannelAppImageName(value);
        }}
        onBlur={() =>
          runValidationTasks("channelAppImageName", channelAppImageName)
        }
        errorMessage={errors.channelAppImageName?.errorMessage}
        hasError={errors.channelAppImageName?.hasError}
        {...getOverrideProps(overrides, "channelAppImageName")}
      ></TextField>
      <TextField
        label="Channel web image name"
        isRequired={true}
        isReadOnly={false}
        value={channelWebImageName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelId,
              channelName,
              channelAppImageName,
              channelWebImageName: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.channelWebImageName ?? value;
          }
          if (errors.channelWebImageName?.hasError) {
            runValidationTasks("channelWebImageName", value);
          }
          setChannelWebImageName(value);
        }}
        onBlur={() =>
          runValidationTasks("channelWebImageName", channelWebImageName)
        }
        errorMessage={errors.channelWebImageName?.errorMessage}
        hasError={errors.channelWebImageName?.hasError}
        {...getOverrideProps(overrides, "channelWebImageName")}
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
              channelId,
              channelName,
              channelAppImageName,
              channelWebImageName,
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
          isDisabled={!(idProp || tvChannelModelProp)}
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
              !(idProp || tvChannelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
