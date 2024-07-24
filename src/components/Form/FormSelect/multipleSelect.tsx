import MuiSelect from '@mui/material/Select';
import { ForwardedRef, forwardRef } from "react";
import { Checkbox, ListItemText, MenuItem, SelectProps as MuiSelectProps } from '@mui/material';
import { IOptions } from 'domain/contract/base/iOptions';

type Props = {
    options: IOptions[],
    multipleCheckBox?: boolean,
    value: IOptions[]
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
        onChange,
        ...rest
    } = props

    return (
        <MuiSelect
            ref={ref}
            id={name}
            label={label}
            value={value}
            multiple={multiple}
            {...rest}
            onChange={onChange}
        >
            {
                multipleCheckBox &&
                options.map((item: IOptions) => (
                    <MenuItem key={item.value} value={item.description}>
                        <Checkbox checked={(value as any[]).includes(item.description)} />
                        <ListItemText primary={item.description} />
                    </MenuItem>

                ))
            }
        </MuiSelect>
    )
})

export default MultipleSelect