import { Box } from "@mui/material"
import useStyles from "./styles"
import logo from '../../assets/images/logo_white.png'
import Image from "components/Image"

const Footer = () => {

    const styles = useStyles()
    return (
        <Box component="footer" sx={styles.footer}>
            <Image src={logo} width={100} height={50} alt='Logo' />            
        </Box>
    )
}

export default Footer