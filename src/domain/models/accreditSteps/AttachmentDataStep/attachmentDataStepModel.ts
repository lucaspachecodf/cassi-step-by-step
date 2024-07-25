import { AttachmentDataModel } from "./attachmentDataModel";

export class AttachmentDataStepModel {
  
  attachmentData: AttachmentDataModel;

  constructor() {
    this.attachmentData = new AttachmentDataModel([], '');
  }
}