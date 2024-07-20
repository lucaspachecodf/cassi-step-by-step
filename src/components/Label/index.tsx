import { Typography, TypographyProps } from "@mui/material"
import { FC } from "react"

const Label: FC<TypographyProps> = (props) => {

    const {
        children,
        ...rest
    } = props

    return (
        <Typography {...rest}>
            {children}
        </Typography>
    )
}

export default Label