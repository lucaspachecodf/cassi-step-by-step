import { Paper } from "@mui/material"
import AddressDataStep from "./AddressDataStep";
import { EAccreditSteps } from "domain/enums/eAccreditSteps";
import StepIndicator from "../StepIndicator";
import Div from "components/Div";
import ButtonNextPrev from "../ButtonNextPrev";
import ProviderDataStep from "./ProviderDataStep";
import useAccreditSteps from "hooks/accredit/useSteps";
import { useAccreditStepsContext } from "contexts";

const Steps = () => {

    const { steps } = useAccreditSteps();
    const { state } = useAccreditStepsContext();

    const getStepContent = (step: number) => {
        switch (step) {
            case EAccreditSteps.ProviderData:
                return <ProviderDataStep />
            case EAccreditSteps.AddressData:
                return <AddressDataStep />
            default:
                return "passo desconhecido";
        }
    }

    return (
        <Div>
            {
                state.activeStep === steps.length ? <></> /* Fazer a etapa concluido */ :
                <Paper elevation={1} sx={{ padding: 2 }}>
                    <Div>
                        {
                            !state.conclusion &&
                            <StepIndicator />
                        }
                        {getStepContent(state.activeStep)}
                        {
                            !state.conclusion &&
                            <ButtonNextPrev />
                        }
                    </Div>
                </Paper>
            }
        </Div>
    )
}

export default Steps