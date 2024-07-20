import React, { FC } from "react"
import { Box, Stack, SxProps, Theme } from '@mui/material'
import useStyles from './styles'

type Props = {
    spacing?: number,
    sxStack?: SxProps<Theme>
}

type DivProps = React.ComponentProps<typeof Stack> & Props;

const Div: FC<DivProps> = (props) => {

    const styles = useStyles();

    const {
        children,
        spacing = 2,
        sxStack,
        ...rest
    } = props

    return (
        <Box sx={styles.div} {...rest}>
            <Stack spacing={spacing} sx={sxStack}>
                {children}
            </Stack>
        </Box>
    )
}

export default Div