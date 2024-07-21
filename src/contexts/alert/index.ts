import { createContext } from 'react';
import { IAlertContext } from 'contexts/alert/contracts/contexts';
import { SnackBarInitialState, SpinnerInitialState } from 'contexts/alert/initialStates';

export const AlertContext = createContext<IAlertContext>({
    spinner: {
        spinnerState: SpinnerInitialState,
        spinnerDispatch: () => { }
    },
    snackBar: {
        snackBarState: SnackBarInitialState,
        snackBarDispatch: () => { }
    }
});