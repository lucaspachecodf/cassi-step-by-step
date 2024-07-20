import { SxProps } from "@mui/material"

export const useStyles = () => {

    const container: SxProps = { display: 'flex' }

    const iconMenu: SxProps = {
        marginRight: 5        
    }

    const title: SxProps = { flexGrow: 1 }

    return { iconMenu, container, title }
}