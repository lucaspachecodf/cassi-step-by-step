import { SxProps } from "@mui/material";

const useStyles = () => {
  const div: SxProps = {
    maxWidth: "100%",
    maxHeight: "100vh",
    overflow: "auto",
    p: 2
  };

  return { div };
};

export default useStyles;
