import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form"
import { IFormControllerSelectProps } from "domain/contract/form/iFormControllerSelectProps";
import Select, { SelectProps } from "./select";
import MultipleSelect from "./multipleSelect";

type Props = {
    handleChange?: () => void,
    multipleCheckBox?: boolean,
    size?: 'small' | 'medium';
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
    } = props;

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    return (
        <FormControl error={fieldError && true} margin="dense" fullWidth size={size}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <>
                        {
                            multipleCheckBox || multiple ?
                                <MultipleSelect
                                    {...field}
                                    label={label}
                                    options={options}
                                    multiple={multiple}
                                    multipleCheckBox={multipleCheckBox}
                                    renderValue={(selected) => (
                                        (selected as string[]).map((value) => {
                                            const option = options.find(option => option.value.toString() === value);
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
                )}
            />
        </FormControl>
    )
}

export default FormSelect 