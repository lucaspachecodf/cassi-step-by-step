import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form"
import { IFormControllerSelectProps } from "domain/contract/form/iFormControllerSelectProps";
import Select, { SelectProps } from "./select";
import MultipleSelect from "./multipleSelect";
import Label from "components/Label";

type Props = {
    handleChange?: () => void
    multipleCheckBox?: boolean
    size?: 'small' | 'medium'
    topLabel?: string
    required?: boolean
}
type ControllerProps<T extends FieldValues> = Props & IFormControllerSelectProps<T>

const FormSelect = <T extends FieldValues>(props: ControllerProps<T> & SelectProps) => {

    const {
        label,
        options,
        control,
        name,
        fieldError,
        handleChange,
        size,
        multipleCheckBox,
        multiple,
        topLabel,
        required        
    } = props;

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    return (
        <FormControl error={fieldError && true} margin="dense" fullWidth size={size}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                control={control}
                name={name}
                render={({ field }) => {

                    const valueArray = Array.isArray(field.value) ? field.value : [];

                    return (
                        <>
                            {
                                !label && topLabel &&
                                <Label
                                    bold
                                    marginBottom={1}
                                    required={required}
                                    error={!!fieldError}
                                    variant="body2">
                                    {topLabel}
                                </Label>
                            }
                            {
                                multipleCheckBox || multiple ?
                                    <MultipleSelect
                                        {...field}
                                        label={label}
                                        options={options}
                                        multiple={multiple}
                                        multipleCheckBox={multipleCheckBox}
                                        value={valueArray}                                        
                                        renderValue={(selected: any) => (
                                            (selected as string[]).map((value) => {
                                                const option = options.find(option => option.description.toString() === value);
                                                return option ? option.description : null;
                                            }).filter(Boolean).join(', ')
                                        )}
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                                                    width: 250,
                                                },
                                            },
                                        }}
                                        onChange={(e, value) => {
                                            field.onChange(e)
                                            handleChange && handleChange()
                                        }} />
                                    :
                                    <Select
                                        {...field}
                                        label={label}
                                        options={options}
                                        onChange={(e, value) => {
                                            field.onChange(e)
                                            handleChange && handleChange()
                                        }} />
                            }

                            <FormHelperText error variant="outlined">
                                {fieldError?.message}
                            </FormHelperText>

                        </>
                    );
                }}

            />
        </FormControl>
    )
}

export default FormSelect 