import React, { forwardRef } from "react"
import { Box, Stack, SxProps, Theme } from '@mui/material'
import useStyles from './styles'

type Props = {
    spacing?: number,
    sxStack?: SxProps<Theme>
}

type DivProps = React.ComponentProps<typeof Box> & Props;

const Div = forwardRef<HTMLDivElement, DivProps>((props, ref) => {

    const styles = useStyles();

    const {
        children,
        spacing = 2,
        sxStack,
        ...rest
    } = props

    return (
        <Box sx={styles.div} ref={ref} {...rest}>
            <Stack spacing={spacing} sx={sxStack}>
                {children}
            </Stack>
        </Box>
    )
    //}
});

export default Div