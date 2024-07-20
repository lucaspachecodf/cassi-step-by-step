import React, { FC } from "react"
import { Stack } from '@mui/material'
import useStyles from "./styles"
import Div from "components/Div"

type Props = {
    spacing?: number
}

type ContainerProps = React.ComponentProps<typeof Stack> & Props;

const Container: FC<ContainerProps> = (props) => {

    const styles = useStyles()

    const {
        children,
        spacing = 2,
        ...rest
    } = props

    return (
        <Div
            sx={styles.container}
            spacing={spacing}
            sxStack={styles.containerStack}
            {...rest}
        >
            {children}
        </Div>
    )
}

export default Container