export interface IFileWithPreview extends File {
  preview: string;
}

export interface IAttachmentDataModel {
  files: IFileWithPreview[];
}

export class AttachmentDataModel implements IAttachmentDataModel {
  constructor(readonly files: IFileWithPreview[]) {}
}
