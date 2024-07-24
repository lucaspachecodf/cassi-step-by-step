import { IContactDataModel } from "domain/models/accreditSteps/ContactDataStep/contactDataModel";

export interface ContactSchemaModel extends IContactDataModel {
  
}

export type AccreditContactDataStepsSchemaModel = {
  contactData: ContactSchemaModel;
};

export type ContactDataStepsSchemaModel = {
  contactDataStep: AccreditContactDataStepsSchemaModel;
};
