import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps, styled } from "@mui/material";
import { FC } from "react";
import useStyles from "./styles";

type AppBarProps = {
    
} & MuiAppBarProps

const AppBar: FC<AppBarProps> = (props) => {
    const styles = useStyles()
    const AppBarStyled = styled(MuiAppBar)<AppBarProps>(...Array.isArray(styles.appBar) ? styles.appBar : [styles.appBar]);
    return (
        <AppBarStyled {...props} />
    )
}

export default AppBar