import { useTheme } from '@mui/material';
import { SxProps } from '@mui/material';

const useStyles = () => {
    const theme = useTheme()

    const backDrop: SxProps = { color: '#fff', zIndex: theme.zIndex.drawer + 1000 }
    const stack: SxProps = { alignItems: 'center' }

    return { backDrop, stack }
}

export default useStyles