import { FC, PropsWithChildren, useContext, useReducer } from "react";

import { AccreditStepsContext } from "contexts/accreditSteps";
import { IAccreditStepsContext } from "contexts/accreditSteps/contracts/context";
import { AccreditStepsInitialState } from "contexts/accreditSteps/initialStates";
import AccreditStepsReducer from "contexts/accreditSteps/reducers";

const initialState = AccreditStepsInitialState

type AccreditStepsProviderProps = PropsWithChildren<{}>;

export const AccreditStepsProvider: FC<AccreditStepsProviderProps> = props => {

    const [state, dispatchStep] = useReducer(AccreditStepsReducer, initialState)   

    return (
        <AccreditStepsContext.Provider value={{ state, dispatchStep: dispatchStep }}>
            {props.children}
        </AccreditStepsContext.Provider>
    )
}

export const useAccreditStepsContext = (): IAccreditStepsContext => useContext(AccreditStepsContext);