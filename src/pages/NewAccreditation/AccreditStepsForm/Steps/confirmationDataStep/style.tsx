import { SxProps } from '@mui/material';

const useStyles = () => {

    const containerConfirmation: SxProps = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        width: '100%',
        textAlign: 'center'
    }
    

    return { containerConfirmation }
}

export default useStyles