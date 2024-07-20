import { SxProps } from '@mui/material';

const useStyles = () => {    

    const appBar: SxProps = {
        width: '100%',
        height: '80px',
        paddingLeft: '20px',
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #cccc'
    }

    return { appBar }
}

export default useStyles