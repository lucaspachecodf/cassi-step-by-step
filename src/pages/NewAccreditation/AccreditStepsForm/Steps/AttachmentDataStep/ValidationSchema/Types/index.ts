import { IAttachmentDataModel } from "domain/models/accreditSteps/AttachmentDataStep/attachmentDataModel";

export interface AttachmentSchemaModel extends IAttachmentDataModel {
  
}

export type AccreditAttachmentDataStepsSchemaModel = {
  attachmentData: AttachmentSchemaModel;
};

export type AttachmentDataStepsSchemaModel = {
  attachmentDataStep: AccreditAttachmentDataStepsSchemaModel;
};
