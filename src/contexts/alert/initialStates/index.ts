import { ISnackBarInitialState, ISpinnerInitialState } from 'contexts/alert/contracts/initialStates';

export const SpinnerInitialState: ISpinnerInitialState = {
    isSpinnerVisible: false,
    messageSpinner: ''
};

export const SnackBarInitialState: ISnackBarInitialState = {
    show: false,    
    messageSnackBar: '',
    anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
    autoHideDuration: 3000,
    severity: 'success'
};