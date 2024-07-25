import { Typography, TypographyProps } from "@mui/material"
import { FC, forwardRef } from "react"

type Props = {
    bold?: boolean
 } & TypographyProps

 const Label = forwardRef<HTMLSpanElement, Props>((props, ref) => {

    const {
        bold,
        children,
        ...rest
    } = props

    return (
        <Typography ref={ref} sx={{fontWeight: bold ? 700 : 0}} {...rest}>
            {children}
        </Typography>
    )
});

export default Label