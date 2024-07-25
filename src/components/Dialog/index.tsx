import { Dialog as MuiDialog, DialogActions, DialogContent, DialogProps, DialogTitle, IconButton } from "@mui/material"
import { FC } from "react"
import useStyles from "./styles"
import description from 'utils/description'
import CloseIcon from '@mui/icons-material/Close';
import Button from "components/Button";

export type DialogCustomProps = {
    title: string
    onClose?: () => void
    onCancel?: () => void
    onConfirm?: () => void    
} & DialogProps

const Dialog: FC<DialogCustomProps> = (props) => {

    const { title, open, children, maxWidth = "xs", onCancel, onConfirm, onClose, ...rest } = props
    const styles = useStyles()

    return (
        <MuiDialog {...rest} sx={styles.dialog} maxWidth={maxWidth} open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>
                {
                    onClose &&
                    <IconButton aria-label="close" onClick={onClose} sx={styles.closeButton}>
                        <CloseIcon />
                    </IconButton>
                }
                {children}
            </DialogContent>
            <DialogActions>
                {
                    onCancel &&
                    <Button autoFocus onClick={onCancel}>
                        {description.CONFIG.BUTTONS.NEGATIVE_ANSWER}
                    </Button>
                }
                {
                    onConfirm &&
                    <Button onClick={onConfirm}>{description.CONFIG.BUTTONS.POSITIVE_ANSWER}</Button>
                }
            </DialogActions>
        </MuiDialog>
    )
}

export default Dialog