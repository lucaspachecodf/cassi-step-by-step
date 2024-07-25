import * as yup from 'yup';
import { AccreditAttachmentDataStepsSchemaModel, AttachmentDataStepsSchemaModel, AttachmentSchemaModel } from './Types';
import { IFileWithPreview } from 'domain/models/accreditSteps/AttachmentDataStep/attachmentDataModel';

const fileSchema = yup.mixed<IFileWithPreview>().test(
    'file',
    'O arquivo deve ser um tipo válido',
    (value) => {        
        return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type);
    }
);

const attachmentSchema: yup.ObjectSchema<AttachmentSchemaModel> = yup.object({
    files: yup.array()
        //.of(fileSchema)
        .min(1, 'Pelo menos um arquivo é obrigatório')
        .required('Os arquivos são obrigatórios'),
    observation: yup.string(),
}) as any

const attachmentDataStepSchema: yup.ObjectSchema<AccreditAttachmentDataStepsSchemaModel> = yup.object({
    attachmentData: attachmentSchema
}).required();

const attachmentDataValidationSchema: yup.AnyObjectSchema = yup.object({
    attachmentDataStep: attachmentDataStepSchema
}) as yup.ObjectSchema<AttachmentDataStepsSchemaModel>;

export default attachmentDataValidationSchema