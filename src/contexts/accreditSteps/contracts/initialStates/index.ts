import IAccreditedResponseDto from "domain/dtos/response/accredited/iAccreditedResponseDto"

export interface IAccreditStepsInitialState {
    activeStep: number        
    conclusion: boolean    
    isAnimationStopped: boolean
    accreditedResponse: IAccreditedResponseDto
}