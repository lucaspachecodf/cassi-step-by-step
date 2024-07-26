import { ForwardedRef, forwardRef } from 'react'
import { TextField as MuiTextField, TextFieldProps } from "@mui/material"

type InputProps = {}
type TextInputProps = InputProps & TextFieldProps;

const TextField = forwardRef<HTMLDivElement, TextInputProps>((props, ref: ForwardedRef<HTMLDivElement>) => {

    const {
        size = 'small',        
        ...rest } = props;
        

    return (
        <MuiTextField
            ref={ref}
            margin='dense'
            fullWidth
            size={size}            
            {...rest} />
    )
});

export default TextField