import { AlertColor } from "@mui/material"
import { useAlertContext } from "contexts"

const useSnackBar = () => {

    const { snackBar } = useAlertContext()

    const hidden = () => {
        snackBar.snackBarDispatch({
            type: 'onHiddenSnackBar',
        })
    }

    const show = (messageSnackBar: string, severity: AlertColor, autoHideDuration?: number) => {
        snackBar.snackBarDispatch({
            type: 'onShowSnackBar',
            payload: {
                ...snackBar.snackBarState,
                autoHideDuration: autoHideDuration ? autoHideDuration : snackBar.snackBarState.autoHideDuration,
                severity: severity,
                messageSnackBar: messageSnackBar,
            }
        })
    }

    return { show, hidden }
}

export default useSnackBar