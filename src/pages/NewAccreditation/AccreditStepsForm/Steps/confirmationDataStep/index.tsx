import Div from "components/Div";
import Label from "components/Label";
import { useAccreditStepsContext } from "contexts";
import ReCAPTCHA from "react-google-recaptcha";

const ConfirmationDataStep = () => {

    const { state, dispatchStep } = useAccreditStepsContext()

    function onChangeConfirmation(value: any) {
        
        if (value) {
            dispatchStep({
                type: 'onUpdate',
                payload: { ...state, confirmation: true }
            })
        }
    }

    return (
        <Div sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            width: '100%',
            textAlign: 'center'
        }}>
            <Label bold>
                Confirme que você é humano
            </Label>
            <ReCAPTCHA
                sitekey="6LfE_xYqAAAAABp6Mplq6LHBl36zn7WHat4uFHKB"
                onChange={onChangeConfirmation}
            />
        </Div>
    )
}

export default ConfirmationDataStep