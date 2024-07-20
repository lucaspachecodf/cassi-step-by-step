import { Box, CssBaseline, Toolbar } from '@mui/material';
import AppBar from './AppBar';
import logo from '../../assets/images/logo_cassi.jpg'
import { useStyles } from './styles';
import Image from 'components/Image';

const Header = () => {

    const styles = useStyles()

    return (
        <Box sx={styles.container}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar disableGutters>
                    <Image src={logo} width={120} height={80} alt='Logo' />
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Header