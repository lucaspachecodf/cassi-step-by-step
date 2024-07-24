import * as yup from 'yup';

import { AccreditProviderDataStepsSchemaModel, ProviderDataSchemaModel, ProviderDataStepsSchemaModel } from './Types';
import { EDocumentType } from 'domain/enums/eDocumentType';
import { cpf, cnpj } from "cpf-cnpj-validator";

const cpfValidationSchema = yup.string()
    .required('CPF é obrigatório')
    .test('is-cpf-valid', 'CPF inválido', value => cpf.isValid(value || ''));

const cnpjValidationSchema = yup.string()
    .required('CNPJ é obrigatório')
    .test('is-cnpj-valid', 'CNPJ inválido', value => cnpj.isValid(value || ''));

const providerDataSchema: yup.ObjectSchema<ProviderDataSchemaModel> = yup.object({
    name: yup.string().required('Nome é obrigatório required'),    
    document: yup.string().required().when('providerDocumentType', (providerDocumentType: any, schema) => {        
        return providerDocumentType[0] === `${EDocumentType.CPF}` ? cpfValidationSchema : cnpjValidationSchema;
    }),
    providerType: yup.string().required('Tipo de prestador é obrigatório'),
    specialty: yup.array()
        .of(yup.string().required('Especialidade não pode ser vazia'))
        .min(1, 'Especialidade é obrigatória') 
        .required('Especialidade é obrigatória'),
    providerDocumentType: yup.string().required('Tipo de Documento é obrigatório')
}) as any;

const providerDataStepSchema = () => {
    return yup.object({
        providerData: providerDataSchema
    }).required() as yup.ObjectSchema<AccreditProviderDataStepsSchemaModel>
}

const providerDataValidationSchema: yup.ObjectSchema<ProviderDataStepsSchemaModel> = yup.object({
    providerDataStep: providerDataStepSchema()
});

export default providerDataValidationSchema