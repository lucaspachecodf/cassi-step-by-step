import { SxProps } from "@mui/material";

const useStyles = () => {
  const globalStyles = {
    ul: { margin: 0, padding: 0, listStyle: "none" },
    body: {},
  };

  const container: SxProps = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  return { container, globalStyles };
};

export default useStyles;
