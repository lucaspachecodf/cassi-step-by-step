import { Divider as MuiDivider, DividerProps } from '@mui/material'
import { FC } from 'react'
import useStyles from './styles'

const Divider: FC<DividerProps> = (props) => {

    const styles = useStyles()

    return (
        <MuiDivider {...props} sx={styles.divider} />
    )
}

export default Divider