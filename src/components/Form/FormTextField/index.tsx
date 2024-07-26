import { TextFieldProps } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form"
import { IFormControllerTextInputProps } from "domain/contract/form/iFormControllerTextInputProps";
import TextField from "./textField";
import Label from "components/Label";

type Props = {
    topLabel?: string
}
type ControllerProps<T extends FieldValues> = Props & IFormControllerTextInputProps<T> & TextFieldProps

const FormTextField = <T extends FieldValues>(props: ControllerProps<T>) => {
    const {
        topLabel,
        label,
        control,
        name,
        required,
        fieldError, ...rest
    } = props;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <>
                    {
                        !label && topLabel &&
                        <Label
                            bold
                            required={required}
                            error={!!fieldError}
                            variant="body2">
                            {topLabel}
                        </Label>
                    }
                    <TextField
                        {...field}
                        label={label}
                        helperText={fieldError?.message}
                        error={!!fieldError}
                        {...rest} />
                </>
            )}
        />
    )
}

export default FormTextField 