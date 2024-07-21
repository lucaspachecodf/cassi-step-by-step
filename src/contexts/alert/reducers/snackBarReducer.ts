import { ISnackBarInitialState } from 'contexts/alert/contracts/initialStates';
import { IActionTypeSnackBar } from 'contexts/alert/contracts/actions/iActionType';

const SnackBarReducer = (state: ISnackBarInitialState, { payload, type }: IActionTypeSnackBar): ISnackBarInitialState => {

    switch (type) {
        case "onShowSnackBar":
            return {
                ...state,
                ...payload,
                show: true,
            }
        case "onHiddenSnackBar":
            return {
                ...state,
                show: false,
                messageSnackBar: ''
            }
        default:
            return state;
    }
};

export default SnackBarReducer;