import { SxProps } from "@mui/material";
import { Palette } from "styles/theme";

const useStyles = () => {
  const footer: SxProps = {
    py: 3,
    px: 2,
    //mt: "auto",
    marginTop: 1,
    left: 0,
    bottom: "0",
    width: "100%",
    paddingLeft: "80px",
    backgroundColor: Palette.primary.main,
    display: "flex",    
    position: 'relative'    
  };

  const buttonSocial: SxProps = {
    color: 'white'
  }

  return { footer, buttonSocial };
};

export default useStyles;
