import { IAccreditStepsActionType } from "contexts/accreditSteps/contracts/actions/iActionType";
import { IAccreditStepsInitialState } from "contexts/accreditSteps/contracts/initialStates";

export interface IAccreditStepsContext {
    state: IAccreditStepsInitialState;
    dispatchStep: React.Dispatch<IAccreditStepsActionType>;
}