import Form from "components/Form";
import { FormProvider, useForm } from "react-hook-form";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import Steps from "./Steps";
import { useAccreditStepsContext } from "contexts";
import useAccredit from "hooks/accredit/useAccredit";
import { yupResolver } from "@hookform/resolvers/yup"
import AccreditStepsFormSchema from "./Steps/ValidationSchema";

const StepsAccreditForm = () => {

    const { state, dispatchStep } = useAccreditStepsContext()
    const { handleSave } = useAccredit()

    const methods = useForm<AccreditStepsModel>({
        shouldUnregister: false,
        mode: 'onChange',
        defaultValues: new AccreditStepsModel(),
        resolver: yupResolver(AccreditStepsFormSchema[state.activeStep])
    });
    const { handleSubmit } = methods

    const onSubmit = async (data: AccreditStepsModel) => {
        console.log(data)

         dispatchStep({
             type: 'onUpdate',
             payload: { ...state, isBusy: true }
         })

        handleSave(data).then((result) => {
            dispatchStep({
                type: 'onUpdate',
                payload: { ...state, isBusy: false, conclusion: true, accreditedResponse: result }
            })
        }).catch(async (e) => {
            console.log('error', e)
            dispatchStep({
                type: 'onPrevStep'
            })
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