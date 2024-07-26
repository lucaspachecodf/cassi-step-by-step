import { Typography, TypographyProps } from "@mui/material"
import { forwardRef } from "react"

type Props = {
    bold?: boolean
    required?: boolean
    error?: boolean
} & TypographyProps

const Label = forwardRef<HTMLSpanElement, Props>((props, ref) => {

    const {
        bold,
        required,
        children,
        error,
        ...rest
    } = props

    return (
        <Typography ref={ref} sx={{ fontWeight: bold ? 700 : 0 }} {...rest}>
            {required && <span style={{ color: error ? 'red' : '' }}> * </span>}
            {children}
        </Typography>
    )
});

export default Label