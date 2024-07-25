import { Typography } from "@mui/material"
import { ComponentProps, FC } from "react"

export type TitleProps = {
    bold?: boolean
} & ComponentProps<typeof Typography>

const Title: FC<TitleProps> = (props) => {
    const { children, bold, sx, ...rest } = props
    return (
        <Typography sx={{fontWeight: bold ? 700 : 0, ...sx}} 
        color='primary' 
        variant="h2" {...rest}>
            {children}
        </Typography>
    )
}

export default Title
