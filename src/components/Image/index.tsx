import { Box } from "@mui/material";
import { forwardRef, ImgHTMLAttributes } from "react"

type Props = ImgHTMLAttributes<HTMLImageElement>;

const Image = forwardRef<HTMLImageElement, Props>((props, ref) => {

    const { src, alt, ...rest } = props;

    return (
        <Box
            sx={{
                maxWidth: '100%',
                height: 'auto',
                overflow: 'hidden',
                display: 'block',
            }}
        >
            <img ref={ref} src={src} alt={alt} {...rest} />
        </Box>
    );
});

export default Image