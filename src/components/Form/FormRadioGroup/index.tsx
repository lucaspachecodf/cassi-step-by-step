import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, RadioGroupProps, FormHelperText } from "@mui/material"
import { Controller, FieldValues } from "react-hook-form"
import { IOptions } from "domain/contract/base/iOptions"
import { IFormMultipleButtonGroupProps } from "domain/contract/form/iFormMultipleButtonGroupProps"
import Label from "components/Label"

type Props = {
    required?: boolean
    size?: 'small' | 'medium'
    topLabel?: string
}

type ControllerProps<T extends FieldValues> = IFormMultipleButtonGroupProps<T> & RadioGroupProps & Props

const FormRadioGroup = <T extends FieldValues>(props: ControllerProps<T>) => {

    const {
        legend,
        control,
        name,
        options,
        fieldError,
        required,
        size,
        label,
        topLabel,
        ...rest
    } = props

    return (
        <FormControl error={fieldError && true} component="fieldset">
            <FormLabel htmlFor={name} component="legend">
                {legend}
                {required && <span> * </span>}
            </FormLabel>
            <Controller
                rules={{ required }}
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
                        <RadioGroup {...field} {...rest} row>
                            {options.map((option: IOptions) => {
                                return <FormControlLabel
                                    key={`${option.value}`}
                                    value={String(option.value)}
                                    control={<Radio size={size} />}
                                    label={option.description}
                                />
                            })}
                        </RadioGroup>
                        <FormHelperText error variant="outlined">{fieldError?.message}</FormHelperText>
                    </>
                )}
            />
        </FormControl>
    )
}

export default FormRadioGroup