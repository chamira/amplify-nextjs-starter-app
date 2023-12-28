import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TvChannelCreateFormInputValues = {
    channelId?: string;
    channelName?: string;
    channelAppImageName?: string;
    channelWebImageName?: string;
    owner?: string;
};
export declare type TvChannelCreateFormValidationValues = {
    channelId?: ValidationFunction<string>;
    channelName?: ValidationFunction<string>;
    channelAppImageName?: ValidationFunction<string>;
    channelWebImageName?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TvChannelCreateFormOverridesProps = {
    TvChannelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    channelId?: PrimitiveOverrideProps<TextFieldProps>;
    channelName?: PrimitiveOverrideProps<TextFieldProps>;
    channelAppImageName?: PrimitiveOverrideProps<TextFieldProps>;
    channelWebImageName?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TvChannelCreateFormProps = React.PropsWithChildren<{
    overrides?: TvChannelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TvChannelCreateFormInputValues) => TvChannelCreateFormInputValues;
    onSuccess?: (fields: TvChannelCreateFormInputValues) => void;
    onError?: (fields: TvChannelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TvChannelCreateFormInputValues) => TvChannelCreateFormInputValues;
    onValidate?: TvChannelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TvChannelCreateForm(props: TvChannelCreateFormProps): React.ReactElement;
