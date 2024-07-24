import { IAccreditStepsInitialState } from 'contexts/accreditSteps/contracts/initialStates/index';
import { IAccreditStepsActionReducer } from 'contexts/accreditSteps/contracts/actions/iActionReducer';
import { IAccreditStepsActionType } from 'contexts/accreditSteps/contracts/actions/iActionType';
import { AccreditStepsInitialState } from 'contexts/accreditSteps/initialStates';

const actions: IAccreditStepsActionReducer = {

    onNextStep(state: IAccreditStepsInitialState): IAccreditStepsInitialState {
        return {
            ...state,
            activeStep: state.activeStep + 1
        }
    },
    onPrevStep(state: IAccreditStepsInitialState): IAccreditStepsInitialState {        
        return {
            ...state,
            activeStep: state.activeStep - 1,
            confirmation: false
        }
    },

    onUpdate(state: IAccreditStepsInitialState, action: IAccreditStepsActionType): IAccreditStepsInitialState {
        return {
            ...state,
            ...action.payload
        }
    },
    onComplete(state: IAccreditStepsInitialState): IAccreditStepsInitialState {
        return {
            ...state,
            isAnimationStopped: true,
            conclusion: true
        }
    },    
    onReset(): IAccreditStepsInitialState {
        return {
            ...AccreditStepsInitialState
        }
    },    
}

const AccreditStepsReducer = (state: IAccreditStepsInitialState, action: IAccreditStepsActionType): IAccreditStepsInitialState => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
}

export default AccreditStepsReducer