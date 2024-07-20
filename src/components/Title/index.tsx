import { Typography } from "@mui/material"
import { ComponentProps, FC } from "react"

export type TitleProps = ComponentProps<typeof Typography>

const Title: FC<TitleProps> = (props) => {
    const { children, } = props
    return (
        <Typography color='primary' variant="h2" {...props}>
            {children}
        </Typography>
    )
}

export default Title
