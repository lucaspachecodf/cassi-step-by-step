import { AccreditStepsModel } from 'domain/models/accreditSteps/accreditStepsModel';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useAccreditStepsContext } from 'contexts';

const useAccreditSteps = () => {
    const { state, dispatchStep } = useAccreditStepsContext()    
    const [steps] = useState<string[]>(['Dados', 'Endereço', 'Contato', 'Confirmação', 'Anexo'])

    const { trigger } = useFormContext<AccreditStepsModel>()
    
    const handleNext = async () => {

        const isStepValid = await trigger();
        if (isStepValid) {            
            dispatchStep({
                type: 'onNextStep',
                payload: {
                    ...state                    
                }
            })            
        }
    };

    const handleBack = () => {
        dispatchStep({
            type: 'onPrevStep',
            payload: {
                ...state                
            }
        })
    };

    return { handleNext, handleBack, steps }
}

export default useAccreditSteps