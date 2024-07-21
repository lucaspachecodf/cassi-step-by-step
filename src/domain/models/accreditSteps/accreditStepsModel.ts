import { IAccreditSteps } from 'domain/contract/accreditSteps/iAccreditSteps';
import { ProviderDataStepModel } from './ProviderDataStep/providerDataStepModel';
import { AddressDataStepModel } from './AddressDataStep/addressDataStepModel';

export class AccreditStepsModel implements IAccreditSteps  {
    
    readonly providerDataStep: ProviderDataStepModel
    readonly addressDataStep: AddressDataStepModel

    constructor() {
        this.providerDataStep = new ProviderDataStepModel()
        this.addressDataStep = new AddressDataStepModel()
    }
}