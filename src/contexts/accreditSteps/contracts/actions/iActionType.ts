import { IAccreditStepsInitialState } from "contexts/accreditSteps/contracts/initialStates"

export interface IAccreditStepsActionType {
    type: 'onUpdate' | 'onNextStep' | 'onPrevStep' | 'onComplete' | 'onReset'
    payload?: IAccreditStepsInitialState
}