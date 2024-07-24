import * as yup from 'yup';
import { AccreditContactDataStepsSchemaModel, ContactDataStepsSchemaModel, ContactSchemaModel } from './Types';
import { cellphoneRegex, phoneRegex } from 'utils/regex';

const validatePhone = (value: string | null | undefined, regex: RegExp) => {
    return !value || regex.test(value);
};

const contactSchema: yup.ObjectSchema<ContactSchemaModel> = yup.object({
    name: yup.string().required('Nome para contato é obrigatório'),    
    phone: yup.string()
        .nullable()
        .test('is-valid-phone', 'Telefone inválido', value => !value || validatePhone(value, phoneRegex)) as any,
    cellphone: yup.string()
        .nullable()
        .test('is-valid-cellphone', 'Celular inválido', value => !value || validatePhone(value, cellphoneRegex)) as any,
    email: yup.string().required('O email é obrigatório').email('Email inválido')
}).required().test(
    'phone-or-cellphone',
    'Obrigatório informar pelo menos um telefone',
    function (value) {
        const { phone, cellphone } = value || {};
        return !!(phone || cellphone);
    }
);

const contactDataStepSchema: yup.ObjectSchema<AccreditContactDataStepsSchemaModel> = yup.object({
    contactData: contactSchema
}).required();

const contactDataValidationSchema: yup.AnyObjectSchema = yup.object({
    contactDataStep: contactDataStepSchema
}) as yup.ObjectSchema<ContactDataStepsSchemaModel>;

export default contactDataValidationSchema