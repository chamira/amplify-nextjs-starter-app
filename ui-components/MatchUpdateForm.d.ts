import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Match } from "./graphql/types";
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
export declare type MatchUpdateFormInputValues = {
    matchId?: string;
    date?: string;
    time?: string;
    isTopGame?: boolean;
    owner?: string;
};
export declare type MatchUpdateFormValidationValues = {
    matchId?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    isTopGame?: ValidationFunction<boolean>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchUpdateFormOverridesProps = {
    MatchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    matchId?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    isTopGame?: PrimitiveOverrideProps<SwitchFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MatchUpdateFormProps = React.PropsWithChildren<{
    overrides?: MatchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    match?: Match;
    onSubmit?: (fields: MatchUpdateFormInputValues) => MatchUpdateFormInputValues;
    onSuccess?: (fields: MatchUpdateFormInputValues) => void;
    onError?: (fields: MatchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MatchUpdateFormInputValues) => MatchUpdateFormInputValues;
    onValidate?: MatchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MatchUpdateForm(props: MatchUpdateFormProps): React.ReactElement;
