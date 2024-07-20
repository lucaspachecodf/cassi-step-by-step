import { SxProps } from "@mui/material";

const useStyles = (gutterBottom: boolean) => {
  const paragraph: SxProps = { marginBottom: gutterBottom ? 2 : 0 };

  return paragraph;
};

export default useStyles;
