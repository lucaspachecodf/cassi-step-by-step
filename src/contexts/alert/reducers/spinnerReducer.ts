import { ISpinnerInitialState } from 'contexts/alert/contracts/initialStates';
import { IActionTypeSpinner } from 'contexts/alert/contracts/actions/iActionType';

const SpinnerReducer = (state: ISpinnerInitialState, { payload, type }: IActionTypeSpinner): ISpinnerInitialState => {

    switch (type) {
        case "onShowSpinner":
            return {
                ...state,
                isSpinnerVisible: true,
                messageSpinner: payload?.messageSpinner
            }
        case "onHiddenSpinner":
            return {
                ...state,
                isSpinnerVisible: false,
                messageSpinner: ''
            }
        default:
            return state;
    }
};

export default SpinnerReducer;