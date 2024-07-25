import { CircularProgress, Paper } from "@mui/material";
import Button from "components/Button";
import Div from "components/Div";
import Label from "components/Label";
import { useAccreditStepsContext } from "contexts";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useStyles from "./style";

const ConclusionDataStep = () => {

    const { state, dispatchStep } = useAccreditStepsContext()

    const styles = useStyles()

    const onNewAccreditation = () => {
        dispatchStep({ type: 'onReset' });
    }

    return (
        <Paper>
            <Div sx={styles.containerConclusion}>

                {!state.conclusion ?
                    <>
                        <CircularProgress size={100} color="primary" />
                    </>
                    :
                    <>
                        <CheckCircleIcon color="primary" sx={{ fontSize: 50, alignSelf: 'center' }} />
                        <Label bold>
                            Protocolo: {state.accreditedResponse.protocolNumber}
                        </Label>
                        <Label>
                            Sua solicitação foi enviada com sucesso
                        </Label>
                        <Button variant="contained" onClick={onNewAccreditation}>
                            Nova solicitação
                        </Button>
                    </>
                }
            </Div>
        </Paper>
    )
}

export default ConclusionDataStep