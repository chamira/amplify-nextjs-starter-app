import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Tournament } from "./graphql/types";
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
export declare type TournamentUpdateFormInputValues = {
    tournamentId?: string;
    tournamentName?: string;
    tournamentTags?: string;
    tournamentLink?: string;
    owner?: string;
};
export declare type TournamentUpdateFormValidationValues = {
    tournamentId?: ValidationFunction<string>;
    tournamentName?: ValidationFunction<string>;
    tournamentTags?: ValidationFunction<string>;
    tournamentLink?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TournamentUpdateFormOverridesProps = {
    TournamentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tournamentId?: PrimitiveOverrideProps<TextFieldProps>;
    tournamentName?: PrimitiveOverrideProps<TextFieldProps>;
    tournamentTags?: PrimitiveOverrideProps<TextFieldProps>;
    tournamentLink?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TournamentUpdateFormProps = React.PropsWithChildren<{
    overrides?: TournamentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tournament?: Tournament;
    onSubmit?: (fields: TournamentUpdateFormInputValues) => TournamentUpdateFormInputValues;
    onSuccess?: (fields: TournamentUpdateFormInputValues) => void;
    onError?: (fields: TournamentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TournamentUpdateFormInputValues) => TournamentUpdateFormInputValues;
    onValidate?: TournamentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TournamentUpdateForm(props: TournamentUpdateFormProps): React.ReactElement;
