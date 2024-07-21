import { useAlertContext } from "contexts"
import useSnackBar from "hooks/alert/useSnackBar"
import MuiSnackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";
import useStyles from "./styles";

const Snackbar = () => {

    const { snackBar } = useAlertContext()
    const { hidden } = useSnackBar()
    const styles = useStyles()

    return (
        <MuiSnackbar
            open={snackBar.snackBarState.show}
            autoHideDuration={snackBar.snackBarState.autoHideDuration}
            anchorOrigin={snackBar.snackBarState.anchorOrigin}            
            onClose={hidden}
        >
            <Alert onClose={hidden} severity={snackBar.snackBarState.severity} sx={styles.alert}>
                {snackBar.snackBarState.messageSnackBar}
            </Alert>
        </MuiSnackbar>
    )
}

export default Snackbar