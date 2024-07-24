import * as yup from 'yup';

import { AccreditAddressDataStepsSchemaModel, AddressDataSchemaModel, AddressDataStepsSchemaModel, AddressSchemaModel } from './Types';

const addressSchema: yup.ObjectSchema<AddressSchemaModel> = yup.object({
    zipCode: yup.string().required('Cep é obrigatório'),
    address: yup.string().required('Endereço é obrigatório'),
    state: yup.string().required('Estado é obrigatório'),
    city: yup.string().required('Cidade é obrigatória'),
    district: yup.string().required('Bairro é obrigatório'),
    number: yup.string().required('Número é obrigatório'),
    complement: yup.string()
}).required();

const addressDataSchema: yup.ObjectSchema<AddressDataSchemaModel> = yup.object({
    address: addressSchema 
}).required();

const addressDataStepSchema: yup.ObjectSchema<AccreditAddressDataStepsSchemaModel> = yup.object({
    addressData: addressDataSchema
}).required();

const addressDataValidationSchema: yup.AnyObjectSchema = yup.object({
    addressDataStep: addressDataStepSchema
}) as yup.ObjectSchema<AddressDataStepsSchemaModel>;

export default addressDataValidationSchema