import { TextFieldProps } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form"
import { IFormControllerTextInputProps } from "domain/contract/form/iFormControllerTextInputProps";
import TextField from "./textField";

type Props = {}
type ControllerProps<T extends FieldValues> = Props & IFormControllerTextInputProps<T> & TextFieldProps

const FormTextField = <T extends FieldValues>(props: ControllerProps<T>) => {
    const { label, control, name, fieldError, ...rest } = props;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField                    
                    {...field}                    
                    label={label}
                    helperText={fieldError?.message}
                    error={!!fieldError} 
                    {...rest} />
            )}
        />
    )
}

export default FormTextField 