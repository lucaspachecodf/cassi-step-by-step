export interface IFileWithPreview extends File {
  preview: string;
}

export interface IAttachmentDataModel {
  files: IFileWithPreview[];
  observation?: string
}

export class AttachmentDataModel implements IAttachmentDataModel {
  constructor(readonly files: IFileWithPreview[], readonly observation?: string) {}
}
