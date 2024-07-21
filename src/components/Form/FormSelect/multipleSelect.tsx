import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import React, { ForwardedRef, forwardRef } from "react";
import { OptionsModel } from "domain/models";
import { Checkbox, ListItemText, MenuItem, SelectProps as MuiSelectProps } from '@mui/material';

type Props = {
    options: OptionsModel[],
    multipleCheckBox?: boolean,
    value: OptionsModel[]
}

export type SelectProps = Props & MuiSelectProps

const MultipleSelect = forwardRef<HTMLSelectElement, SelectProps>((props, ref: ForwardedRef<HTMLSelectElement>) => {

    const {
        name,
        label,
        options,
        multiple,
        multipleCheckBox,
        value,
        ...rest
    } = props

    const [selectedValue, setSelectedValue] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<any>) => {
        const {
            target: { value },
        } = event;

        setSelectedValue(
            typeof value === 'string'
                ? value.split(',')
                : value
        );
    };

    return (
        <MuiSelect
            ref={ref}
            id={name}
            label={label}
            value={selectedValue}
            multiple={multiple}
            {...rest}
            onChange={handleChange}>
            {
                multipleCheckBox &&
                options.map((item: OptionsModel) => (
                    <MenuItem key={item.value} value={item.description}>
                        <Checkbox checked={(selectedValue as string[]).includes(item.description)} />
                        <ListItemText primary={item.description} />
                    </MenuItem>
                ))
            }
        </MuiSelect>
    )
})

export default MultipleSelect