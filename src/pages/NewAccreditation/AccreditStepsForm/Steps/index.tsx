import { Paper } from "@mui/material"
import AddressDataStep from "./AddressDataStep";
import { EAccreditSteps } from "domain/enums/eAccreditSteps";
import StepIndicator from "../StepIndicator";
import Div from "components/Div";
import ButtonNextPrev from "../ButtonNextPrev";
import ProviderDataStep from "./ProviderDataStep";

const Steps = () => {

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
            <Paper elevation={1} sx={{ padding: 2 }}>
                <Div>
                    <StepIndicator />
                    {getStepContent(0)}
                    <ButtonNextPrev />
                </Div>
            </Paper>
        </Div>
    )
}

export default Steps