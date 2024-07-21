import { Step, StepLabel, Stepper } from "@mui/material"

import { useState } from "react"

const StepIndicator = () => {
    
    const [steps] = useState<string[]>(['Dados', 'Endereço', 'Contato', 'Confirmação', 'Anexo'])

    return (
        <Stepper alternativeLabel activeStep={1}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default StepIndicator