import { Controller, FieldValues, Path, UseFormSetValue } from "react-hook-form"
import { IFormControllerTextInputProps } from "domain/contract/form/iFormControllerTextInputProps";
import { mask as maskRemask, unMask } from 'remask'
import { InputBaseProps } from "@mui/material";
import TextField from "../FormTextField/textField";
import Label from "components/Label";

type Props<T extends FieldValues> = {
    mask: string[]
    setValue: UseFormSetValue<T>
    size?: 'small' | 'medium'
    required?: boolean
    topLabel?: string
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
        topLabel,
        required,
        placeholder
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
                        onBlur={onBlur}
                        onChange={onChange}
                        label={label}
                        helperText={fieldError?.message}
                        error={!!fieldError}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        size={size}
                    />
                </>
            )}
        />
    )
}

export default FormTextFieldMask