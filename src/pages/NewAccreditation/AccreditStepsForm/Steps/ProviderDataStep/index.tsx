import FormRadioGroup from "components/Form/FormRadioGroup";
import GridContainer from "components/GridContainer";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import { PROVIDER_TYPE_OPTIONS } from "options/providerTypeOptions";
import { useFormContext } from "react-hook-form";

const ProviderDataStep = () => {

    const { formState, control } = useFormContext<AccreditStepsModel>();

    const { errors } = formState

    return (
        <>
            <GridContainer container>
                <FormRadioGroup
                    required
                    size="small"
                    legend="Tipo"
                    control={control}
                    name="providerDataStep.providerData.providerType"
                    options={PROVIDER_TYPE_OPTIONS}
                    fieldError={errors.providerDataStep?.providerData?.providerType}
                >
                </FormRadioGroup>

            </GridContainer>
        </>
    )
}

export default ProviderDataStep