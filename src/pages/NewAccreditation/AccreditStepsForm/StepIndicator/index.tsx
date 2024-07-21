import { Step, StepLabel, Stepper } from "@mui/material"
import { useAccreditStepsContext } from "contexts"
import useAccreditSteps from "hooks/accredit/useSteps"

const StepIndicator = () => {
    
    const { steps } = useAccreditSteps()
    const { state } = useAccreditStepsContext()

    return (
        <Stepper alternativeLabel activeStep={state.activeStep}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default StepIndicator