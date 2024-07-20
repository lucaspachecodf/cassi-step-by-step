import { FC } from 'react';
import { Typography } from '@mui/material';
import useStyles from './styles';

type Props = {
    variant?: 'body1' | 'body2';
    color?: string;
    align?: 'left' | 'center' | 'right';
    gutterBottom?: boolean;
}

type ParagraphProps = React.ComponentProps<typeof Typography> & Props;

const Paragraph: FC<ParagraphProps> = (props) => {

    const {
        children,
        variant = 'body1',
        color = 'text.primary',
        align = 'left',
        gutterBottom = false,
        ...rest
    } = props

    const styles = useStyles(gutterBottom)

    return (
        <Typography
            variant={variant}
            color={color}
            align={align}
            gutterBottom={gutterBottom}
            sx={styles}
            {...rest}
        >
            {children}
        </Typography>
    )
}

export default Paragraph;
