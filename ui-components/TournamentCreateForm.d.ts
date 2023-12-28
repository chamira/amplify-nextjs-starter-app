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
export declare type TournamentCreateFormInputValues = {
    tournamentId?: string;
    tournamentName?: string;
    tournamentTags?: string;
    tournamentLink?: string;
    owner?: string;
};
export declare type TournamentCreateFormValidationValues = {
    tournamentId?: ValidationFunction<string>;
    tournamentName?: ValidationFunction<string>;
    tournamentTags?: ValidationFunction<string>;
    tournamentLink?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TournamentCreateFormOverridesProps = {
    TournamentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tournamentId?: PrimitiveOverrideProps<TextFieldProps>;
    tournamentName?: PrimitiveOverrideProps<TextFieldProps>;
    tournamentTags?: PrimitiveOverrideProps<TextFieldProps>;
    tournamentLink?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TournamentCreateFormProps = React.PropsWithChildren<{
    overrides?: TournamentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TournamentCreateFormInputValues) => TournamentCreateFormInputValues;
    onSuccess?: (fields: TournamentCreateFormInputValues) => void;
    onError?: (fields: TournamentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TournamentCreateFormInputValues) => TournamentCreateFormInputValues;
    onValidate?: TournamentCreateFormValidationValues;
} & React.CSSProperties>;
export default function TournamentCreateForm(props: TournamentCreateFormProps): React.ReactElement;
