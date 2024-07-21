import { IAccreditStepsInitialState } from "contexts/accreditSteps/contracts/initialStates";
import { IAccreditStepsActionType } from "contexts/accreditSteps/contracts/actions/iActionType";

export interface IAccreditStepsActionReducer {
  onNextStep: (state: IAccreditStepsInitialState) => IAccreditStepsInitialState;
  onPrevStep: (state: IAccreditStepsInitialState) => IAccreditStepsInitialState;
  onUpdate: (
    state: IAccreditStepsInitialState,
    action: IAccreditStepsActionType
  ) => IAccreditStepsInitialState;
  onComplete: (
    state: IAccreditStepsInitialState,
    action: IAccreditStepsActionType
  ) => IAccreditStepsInitialState;
  onReset: () => IAccreditStepsInitialState;  
}
