import addressDataValidationSchema from "../AddressDataStep/ValidationSchema";
import attachmentDataValidationSchema from "../AttachmentDataStep/ValidationSchema";
import contactDataValidationSchema from "../ContactData/ValidationSchema";
import providerDataValidationSchema from "../ProviderDataStep/ValidationSchema";
import * as yup from "yup";

const AccreditStepsFormSchema = [
  providerDataValidationSchema,
  addressDataValidationSchema,
  contactDataValidationSchema,
  yup.object(),
  attachmentDataValidationSchema  
];

export default AccreditStepsFormSchema;
