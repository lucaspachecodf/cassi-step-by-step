import { IAccreditStepsInitialState } from "contexts/accreditSteps/contracts/initialStates";
import IAccreditedResponseDto from "domain/dtos/response/accredited/iAccreditedResponseDto";

export const AccreditStepsInitialState: IAccreditStepsInitialState = {
    activeStep: 0,    
    confirmation: false,    
    isBusy: false,
    conclusion: false,
    accreditedResponse: { id: 0, protocolNumber: '' } as IAccreditedResponseDto
};