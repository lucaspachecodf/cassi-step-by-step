import { ConfirmationDataModel } from "./contactDataModel";

export class ConfirmationDataStepModel {
  
  confirmationData: ConfirmationDataModel;

  constructor() {
    this.confirmationData = new ConfirmationDataModel(false);
  }
}