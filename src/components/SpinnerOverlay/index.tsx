import { Backdrop, CircularProgress, Stack, Typography } from '@mui/material'
import { useAlertContext } from 'contexts'
import useStyles from './styles'

const SpinnerOverlay = () => {

    const { spinner } = useAlertContext()
    const styles = useStyles()

    return (
        <Backdrop sx={styles.backDrop} open={spinner.spinnerState.isSpinnerVisible}>
            <Stack sx={styles.stack}>
                <CircularProgress color="inherit" />
                <Typography color='inherit'>
                    {spinner.spinnerState.messageSpinner}
                </Typography>
            </Stack>
        </Backdrop>
    )
}

export default SpinnerOverlay