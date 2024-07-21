import MuiSelect from '@mui/material/Select';
import { ForwardedRef, forwardRef } from "react";
import { OptionsModel } from "domain/models";
import { MenuItem, SelectProps as MuiSelectProps } from '@mui/material';

type Props = {
    options: OptionsModel[],
    multipleCheckBox?: boolean
}

export type SelectProps = Props & MuiSelectProps

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref: ForwardedRef<HTMLSelectElement>) => {

    const {
        name,
        label,
        options,
        multiple,
        multipleCheckBox,
        ...rest
    } = props

    return (
        <MuiSelect
            ref={ref}
            id={name}
            label={label}
            {...rest}>
            {
                options?.map((item, index) => {
                    return <MenuItem key={item.value} value={item.value}>{item.description}</MenuItem>
                })
            }
        </MuiSelect>
    )
})

export default Select