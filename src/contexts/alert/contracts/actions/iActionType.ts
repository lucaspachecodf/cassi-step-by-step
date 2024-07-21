import { ISnackBarInitialState, ISpinnerInitialState } from 'contexts/alert/contracts/initialStates';

export interface IActionTypeSnackBar {
    type: 'onShowSnackBar' | 'onHiddenSnackBar'
    payload?: ISnackBarInitialState
}

export interface IActionTypeSpinner {
    type: 'onShowSpinner' | 'onHiddenSpinner'
    payload?: ISpinnerInitialState
}