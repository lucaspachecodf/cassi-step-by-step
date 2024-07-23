import * as yup from 'yup';

import { AccreditProviderDataStepsSchemaModel, ProviderDataSchemaModel, ProviderDataStepsSchemaModel } from './Types';

const providerDataSchema: yup.ObjectSchema<ProviderDataSchemaModel> = yup.object({
    name: yup.string().required('Nome é obrigatório required'),
    document: yup.string().required('Documento é obrigatório'),
    providerType: yup.string().required('Tipo de prestador é obrigatório'),
    specialty: yup.array().required('Especialidade é obrigatório'),
    providerDocumentType: yup.number().required('Tipo de Documento é obrigatório')
});

const providerDataStepSchema = () => {
    return yup.object({
        providerData: providerDataSchema
    }).required() as yup.ObjectSchema<AccreditProviderDataStepsSchemaModel>
}

const providerDataValidationSchema: yup.ObjectSchema<ProviderDataStepsSchemaModel> = yup.object({
    providerDataStep: providerDataStepSchema()
});

export default providerDataValidationSchema