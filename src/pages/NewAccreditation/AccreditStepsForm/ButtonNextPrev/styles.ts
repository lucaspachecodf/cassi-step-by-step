import { SxProps } from "@mui/material";

const useStyles = () => {
  const container: SxProps = {
    marginBottom: 5,
    marginTop: 5,
    display: "flex",
    alignContent: "flex-end",
    justifyContent: "space-between",
  };

  return { container };
};

export default useStyles;
