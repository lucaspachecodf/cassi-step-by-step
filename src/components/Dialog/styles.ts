import { useTheme } from '@mui/material';
import { SxProps } from '@mui/material';

const useStyles = () => {

    const theme = useTheme()

    const dialog: SxProps = { '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }
    const closeButton: SxProps = {
        position: 'absolute',
        right: 8,
        top: 8,
        color: theme.palette.grey[500],
    }

    return { dialog, closeButton }
}

export default useStyles