import Form from "components/Form";
import { FormProvider, useForm } from "react-hook-form";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import Steps from "./Steps";


const StepsAccreditForm = () => {

    const methods = useForm<AccreditStepsModel>({
        shouldUnregister: false,
        mode: 'onChange',
        defaultValues: new AccreditStepsModel()        
    });
    const { handleSubmit } = methods

    const onSubmit = (data: AccreditStepsModel) => {
        console.log(data)
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
