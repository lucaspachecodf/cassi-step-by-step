import { SxProps } from "@mui/material";

const useStyles = () => {
  const container: SxProps = {
    width: "100%", 
    padding: { xs: 2, sm: 3, md: 4 }, 
    //backgroundColor: "lightgray", 
    maxWidth: 'none',    
  };

  const containerStack: SxProps = {
    //height: "100vh",    
    width: "100%",     
    padding: { xs: 2, sm: 3, md: 4 }    
  };

  return { container, containerStack };
};

export default useStyles;
