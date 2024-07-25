import React from 'react';
import Dialog, { DialogCustomProps } from '.';
import Label from 'components/Label';

type MessageDialogProps = {    
    message: string;
    type: 'error' | 'success';
} & DialogCustomProps;

const MessageDialog: React.FC<MessageDialogProps> = (props: MessageDialogProps) => {

    const {
        open,
        onClose,
        message,
        title,
        ...rest
    } = props;

    return (
        <Dialog
            title={title}
            open={open}
            onClose={onClose}
            {...rest}
            aria-labelledby="message-dialog-title"
        >
            <Label>
                {message}
            </Label>
        </Dialog>
    );
};

export default MessageDialog;