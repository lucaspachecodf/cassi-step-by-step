import Form from "components/Form";
import { FormProvider, useForm } from "react-hook-form";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import Steps from "./Steps";
import { useAccreditStepsContext } from "contexts";
import useAccredit from "hooks/accredit/useAccredit";

const StepsAccreditForm = () => {

    const { state, dispatchStep } = useAccreditStepsContext()
    const { handleSave } = useAccredit()

    const methods = useForm<AccreditStepsModel>({
        shouldUnregister: false,
        mode: 'onChange',
        defaultValues: new AccreditStepsModel()        
    });
    const { handleSubmit } = methods

    const onSubmit = (data: AccreditStepsModel) => {
        console.log(data)
        handleSave(data).then((result) => {
            dispatchStep({
                type: 'onUpdate',
                payload: { ...state, conclusion: true,  accreditedResponse: result }
            })
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Steps />
            </Form>
        </FormProvider>
    );
};

export default StepsAccreditForm;