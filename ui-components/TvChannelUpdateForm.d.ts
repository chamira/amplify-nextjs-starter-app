import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TvChannel } from "./graphql/types";
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
export declare type TvChannelUpdateFormInputValues = {
    channelId?: string;
    channelName?: string;
    channelAppImageName?: string;
    channelWebImageName?: string;
    owner?: string;
};
export declare type TvChannelUpdateFormValidationValues = {
    channelId?: ValidationFunction<string>;
    channelName?: ValidationFunction<string>;
    channelAppImageName?: ValidationFunction<string>;
    channelWebImageName?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TvChannelUpdateFormOverridesProps = {
    TvChannelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    channelId?: PrimitiveOverrideProps<TextFieldProps>;
    channelName?: PrimitiveOverrideProps<TextFieldProps>;
    channelAppImageName?: PrimitiveOverrideProps<TextFieldProps>;
    channelWebImageName?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TvChannelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TvChannelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tvChannel?: TvChannel;
    onSubmit?: (fields: TvChannelUpdateFormInputValues) => TvChannelUpdateFormInputValues;
    onSuccess?: (fields: TvChannelUpdateFormInputValues) => void;
    onError?: (fields: TvChannelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TvChannelUpdateFormInputValues) => TvChannelUpdateFormInputValues;
    onValidate?: TvChannelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TvChannelUpdateForm(props: TvChannelUpdateFormProps): React.ReactElement;
