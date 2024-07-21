import { AlertColor, SnackbarOrigin } from "@mui/material"

export interface ISnackBarInitialState {
    show: boolean
    severity?: AlertColor
    autoHideDuration?: number
    anchorOrigin?: SnackbarOrigin;
    messageSnackBar: string | undefined
}

export interface ISpinnerInitialState {  
    isSpinnerVisible: boolean    
    messageSpinner: string | undefined
}