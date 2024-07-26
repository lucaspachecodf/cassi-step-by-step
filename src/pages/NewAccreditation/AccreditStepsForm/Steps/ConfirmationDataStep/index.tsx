import MessageDialog from "components/Dialog/message";
import Div from "components/Div";
import Label from "components/Label";
import { useAccreditStepsContext } from "contexts";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useStyles from "./style";

const ConfirmationDataStep = () => {

    const { state, dispatchStep } = useAccreditStepsContext()
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const styles = useStyles()

    function onChangeConfirmation(value: any) {

        if (value) {
            dispatchStep({
                type: 'onUpdate',
                payload: { ...state, confirmation: true }
            })
        }
    }

    const handleRecaptchaError = () => {
        setDialogOpen(true);
    };

    const handleCloseModalError = () => {
        setDialogOpen(false);
        dispatchStep({
            type: 'onUpdate',
            payload: { ...state, confirmation: true }
        })
    };

    return (
        <Div sx={styles.containerConfirmation}>
            <Label bold>
                Confirme que você é humano
            </Label>
            <ReCAPTCHA
                sitekey="6LfE_xYqAAAAABp6Mplq6LHBl36zn7WHat4uFHKB"
                //sitekey="6LfE"
                onChange={onChangeConfirmation}
                onErrored={handleRecaptchaError}
            />

            <MessageDialog
                title="Nota"
                open={dialogOpen}
                type="error"
                onConfirm={handleCloseModalError}
                onClose={handleCloseModalError}
                message="Houve um problema ao 
            carregar o ReCAPTCHA, como tem uma validação para
            avançar para o próximo passo, estou habilitando
            o passo para dar continuidade e não trevar a avaliação
            "/>
        </Div>
    )
}

export default ConfirmationDataStep