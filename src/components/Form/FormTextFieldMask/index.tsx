import { Controller, FieldValues, Path, UseFormSetValue } from "react-hook-form"
import { IFormControllerTextInputProps } from "domain/contract/form/iFormControllerTextInputProps";
import { mask as maskRemask, unMask } from 'remask'
import { InputBaseProps } from "@mui/material";
import TextField from "../FormTextField/textField";

type Props<T extends FieldValues> = {
    mask: string[]
    setValue: UseFormSetValue<T>,
    size?: 'small' | 'medium';
    required?: boolean;
}

type ControllerProps<T extends FieldValues> = Props<T> & IFormControllerTextInputProps<T> & InputBaseProps

const FormTextFieldMask = <T extends FieldValues>(props: ControllerProps<T>) => {

    const { label,
        control,
        name,
        fieldError,
        mask,
        type,
        setValue,
        onBlur,
        size,
        required
    } = props;

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        const maskedValue = maskRemask(unMask(e.target.value), mask);
        setValue(name as Path<T>, maskedValue as any, {
            shouldValidate: true,
        });
    }

    return (
        <Controller
            control={control}
            name={name}            
            render={({ field }) => (
                <TextField                
                    {...field}
                    onBlur={onBlur}
                    onChange={onChange}
                    label={label}
                    helperText={fieldError?.message}
                    error={!!fieldError}
                    type={type}
                    required={required}
                    size={size}                    
                />
            )}
        />
    )
}

export default FormTextFieldMask