import { createContext } from "react";
import { IAccreditStepsContext } from "contexts/accreditSteps/contracts/context";
import { AccreditStepsInitialState } from "contexts/accreditSteps/initialStates";

export const AccreditStepsContext = createContext<IAccreditStepsContext>({
    state: AccreditStepsInitialState,
    dispatchStep: () => { }
});