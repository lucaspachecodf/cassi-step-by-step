import { Box, BoxProps, Tooltip } from '@mui/material'
import { EAccreditSteps } from 'domain/enums/eAccreditSteps'
import description from 'utils/description'
import useStyles from './styles'
import { ForwardedRef, forwardRef } from 'react'
import Button from 'components/Button'

type Props = {
    sizeButton?: "small" | "medium" | "large" | undefined
} & BoxProps

const ButtonNextPrev = forwardRef<HTMLButtonElement, Props>((props, ref: ForwardedRef<HTMLButtonElement>) => {

    const styles = useStyles()

    const {
        sizeButton = 'large',
        ...rest
    } = props

    return (
        <Box {...rest} sx={styles.container} ref={ref}>

            <Tooltip title={description.CONFIG.BUTTONS.STEPS.STEP_NEXT}>
                <Button variant="outlined" color="primary" onClick={() => { }}>
                    {description.CONFIG.BUTTONS.STEPS.STEP_PREV}
                </Button>
            </Tooltip>

            {/* <Button variant="contained" color="primary" type="submit">
                {description.CONFIG.BUTTONS.STEPS.SEND}
            </Button> */}

            <Tooltip title={description.CONFIG.BUTTONS.STEPS.STEP_NEXT}>
                <Button variant="outlined" color="primary" onClick={() => { }}>
                    {description.CONFIG.BUTTONS.STEPS.STEP_NEXT}
                </Button>
            </Tooltip>
        </Box >
    )
})

export default ButtonNextPrev