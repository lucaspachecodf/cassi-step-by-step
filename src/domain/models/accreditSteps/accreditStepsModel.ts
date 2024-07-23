import { IAccreditSteps } from 'domain/contract/accreditSteps/iAccreditSteps';
import { IProviderDataStepModel } from './ProviderDataStep/providerDataStepModel';
import { AddressDataStepModel } from './AddressDataStep/addressDataStepModel';

export interface ProviderData {
    name: string;
    document: string;
    providerType: string;
    specialty: string[];
    providerDocumentType: number;
  }

  export interface AccreditStepsModel {
    providerDataStep: {
      providerData: ProviderData;
    };
  }

// export class AccreditStepsModel implements IAccreditSteps  {    

//     readonly providerDataStep: ProviderDataStepModel
//     readonly addressDataStep: AddressDataStepModel

//     constructor() {
//         this.providerDataStep = new ProviderDataStepModel()
//         this.addressDataStep = new AddressDataStepModel()
//     }
// }