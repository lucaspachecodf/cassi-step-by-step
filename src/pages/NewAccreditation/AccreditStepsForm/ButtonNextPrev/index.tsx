import { Box, BoxProps, Tooltip } from '@mui/material'
import { EAccreditSteps } from 'domain/enums/eAccreditSteps'
import description from 'utils/description'
import useStyles from './styles'
import { ForwardedRef, forwardRef } from 'react'
import Button from 'components/Button'
import useAccreditSteps from 'hooks/accredit/useSteps'
import { useAccreditStepsContext } from 'contexts'

type Props = {
    sizeButton?: "small" | "medium" | "large" | undefined
} & BoxProps

const ButtonNextPrev = forwardRef<HTMLButtonElement, Props>((props, ref: ForwardedRef<HTMLButtonElement>) => {

    const styles = useStyles()
    const { steps, handleBack, handleNext } = useAccreditSteps()
    const { state } = useAccreditStepsContext()

    const {
        ...rest
    } = props

    return (
        <Box {...rest} sx={styles.container} ref={ref}>

            <Tooltip title={description.CONFIG.BUTTONS.STEPS.STEP_NEXT}>
                <Button variant="outlined" color="primary" onClick={handleBack}>
                    {description.CONFIG.BUTTONS.STEPS.STEP_PREV}
                </Button>
            </Tooltip>

            {
                // state.activeStep === 3 ?
                //     <Button variant="contained" color="primary" type="submit">
                //         {description.CONFIG.BUTTONS.STEPS.SEND}
                //     </Button> 
                //     :
                
                    <Tooltip title={description.CONFIG.BUTTONS.STEPS.STEP_NEXT}>
                        <Button variant="outlined" color="primary" onClick={handleNext}>
                            {description.CONFIG.BUTTONS.STEPS.STEP_NEXT}
                        </Button>
                    </Tooltip>
            }
        </Box >
    )
})

export default ButtonNextPrev