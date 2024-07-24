import { ContactDataModel } from "./contactDataModel";

export class ContactDataStepModel {
  
  contactData: ContactDataModel;

  constructor() {
    this.contactData = new ContactDataModel('', '', '', '');
  }
}