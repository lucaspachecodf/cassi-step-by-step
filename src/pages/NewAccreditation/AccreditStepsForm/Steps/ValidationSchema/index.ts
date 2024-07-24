import addressDataValidationSchema from "../AddressDataStep/ValidationSchema";
import contactDataValidationSchema from "../ContactData/ValidationSchema";
import providerDataValidationSchema from "../ProviderDataStep/ValidationSchema";
import * as yup from "yup";

const AccreditStepsFormSchema = [
  providerDataValidationSchema,
  addressDataValidationSchema,
  contactDataValidationSchema,
  yup.object(),
];

export default AccreditStepsFormSchema;
