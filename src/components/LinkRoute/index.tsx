
import { ComponentProps, FC } from "react"
import useStyles from './styles'
import { Link } from "react-router-dom";

export type LinkProps = ComponentProps<typeof Link>

const LinkRoute: FC<LinkProps> = (props) => {
    const styles = useStyles();

    const { children } = props
    return (
        <Link style={styles} {...props}>
            {children}
        </Link>
    )
}

export default LinkRoute
