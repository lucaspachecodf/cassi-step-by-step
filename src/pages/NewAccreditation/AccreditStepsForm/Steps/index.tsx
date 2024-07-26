import { Paper } from "@mui/material"
import AddressDataStep from "./AddressDataStep";
import { EAccreditSteps } from "domain/enums/eAccreditSteps";
import StepIndicator from "../StepIndicator";
import Div from "components/Div";
import ButtonNextPrev from "../ButtonNextPrev";
import ProviderDataStep from "./ProviderDataStep";
import { useAccreditStepsContext } from "contexts";
import ContactDataStep from "./ContactData";
import ConfirmationDataStep from "./ConfirmationDataStep";
import AttachmentDataStep from "./AttachmentDataStep";
import ConclusionDataStep from "./Conclusion";
import { Palette } from "styles/theme";

const Steps = () => {

    const { state } = useAccreditStepsContext();

    const getStepContent = (step: number) => {
        
        switch (step) {
            case EAccreditSteps.ProviderData:
                return <ProviderDataStep />
            case EAccreditSteps.AddressData:
                return <AddressDataStep />
            case EAccreditSteps.ContactData:
                return <ContactDataStep />
            case EAccreditSteps.ConfirmationData:
                return <ConfirmationDataStep />
            case EAccreditSteps.AttachmentData:
                return <AttachmentDataStep />            
            default:
                return "passo desconhecido";
        }
    }

    return (
        <Div>
            {
                state.isBusy || state.conclusion ? <ConclusionDataStep /> :
                    <Paper elevation={1} sx={{ padding: 2, borderBottom: 8, borderColor: Palette.primary.main }}>
                        <Div>
                            {
                                !state.conclusion &&
                                <StepIndicator />
                            }
                            <Div sx={{ minHeight: '50vh' }}>
                                {getStepContent(state.activeStep)}
                            </Div>
                            {
                                !state.conclusion &&
                                <ButtonNextPrev sizeButton="small" />
                            }
                        </Div>
                    </Paper>
            }
        </Div>
    )
}

export default Steps