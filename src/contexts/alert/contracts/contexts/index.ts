import { IActionTypeSpinner, IActionTypeSnackBar } from "contexts/alert/contracts/actions/iActionType"
import { ISnackBarInitialState, ISpinnerInitialState } from "contexts/alert/contracts/initialStates"

export interface AlertSpinnerContext {
    spinnerState: ISpinnerInitialState
    spinnerDispatch: React.Dispatch<IActionTypeSpinner>
}

export interface AlertSnackBarContext {
    snackBarState: ISnackBarInitialState
    snackBarDispatch: React.Dispatch<IActionTypeSnackBar>
}

export interface IAlertContext {
    spinner: AlertSpinnerContext
    snackBar: AlertSnackBarContext
}

