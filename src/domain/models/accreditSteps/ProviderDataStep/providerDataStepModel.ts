import { IProviderDataModel } from "./providerDataModel";

export interface IProviderDataStepModel {
  providerDataStep: {
    providerData: IProviderDataModel;
  };
}

// export class ProviderDataStepModel {
//   providerData: ProviderDataModel;

//   constructor() {
//     this.providerData = new ProviderDataModel('', '', '', [], '1');
//   }
// }
