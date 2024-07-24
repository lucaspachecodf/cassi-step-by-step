export interface IConfirmationDataModel {
  confirmed: boolean;
}

export class ConfirmationDataModel implements IConfirmationDataModel {
  constructor(readonly confirmed: boolean) {}
}
