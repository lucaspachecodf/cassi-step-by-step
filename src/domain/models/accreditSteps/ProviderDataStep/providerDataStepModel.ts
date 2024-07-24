import { ProviderDataModel } from "./providerDataModel";

export class ProviderDataStepModel {
  
  providerData: ProviderDataModel;

  constructor() {
    this.providerData = new ProviderDataModel('', '', '', [], '1');
  }
}