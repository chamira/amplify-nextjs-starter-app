import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MatchCreateFormInputValues = {
    matchId?: string;
    date?: string;
    time?: string;
    isTopGame?: boolean;
    owner?: string;
};
export declare type MatchCreateFormValidationValues = {
    matchId?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    isTopGame?: ValidationFunction<boolean>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchCreateFormOverridesProps = {
    MatchCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    matchId?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    isTopGame?: PrimitiveOverrideProps<SwitchFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MatchCreateFormProps = React.PropsWithChildren<{
    overrides?: MatchCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MatchCreateFormInputValues) => MatchCreateFormInputValues;
    onSuccess?: (fields: MatchCreateFormInputValues) => void;
    onError?: (fields: MatchCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MatchCreateFormInputValues) => MatchCreateFormInputValues;
    onValidate?: MatchCreateFormValidationValues;
} & React.CSSProperties>;
export default function MatchCreateForm(props: MatchCreateFormProps): React.ReactElement;
