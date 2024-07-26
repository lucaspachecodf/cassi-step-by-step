import { Box, IconButton } from "@mui/material"
import useStyles from "./styles"
import logo from '../../assets/images/logo_white.png'
import Image from "components/Image"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const styles = useStyles()
    return (
        <Box component="footer" sx={styles.footer}>
            <Image src={logo} width={100} height={50} alt='Logo' />
            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <IconButton
                    sx={styles.buttonSocial}
                    aria-label="facebook"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    sx={styles.buttonSocial}
                    aria-label="linkedin"
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    sx={styles.buttonSocial}
                    aria-label="instagram"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer