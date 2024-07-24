import { Typography, TypographyProps } from "@mui/material"
import { FC } from "react"

type Props = {
    bold?: boolean
 } & TypographyProps

const Label: FC<Props> = (props) => {

    const {
        bold,
        children,
        ...rest
    } = props

    return (
        <Typography sx={{fontWeight: bold ? 700 : 0}} {...rest}>
            {children}
        </Typography>
    )
}

export default Label