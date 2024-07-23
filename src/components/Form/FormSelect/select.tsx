import MuiSelect from '@mui/material/Select';
import { ForwardedRef, forwardRef } from "react";
import { MenuItem, SelectProps as MuiSelectProps } from '@mui/material';
import { IOptions } from 'domain/contract/base/iOptions';

type Props = {
    options: IOptions[]    
}

export type SelectProps = Props & MuiSelectProps

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref: ForwardedRef<HTMLSelectElement>) => {

    const {
        name,
        label,
        options,        
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