import { AddressDataStepModel } from "domain/models/accreditSteps/AddressDataStep/addressDataStepModel";
import { ProviderDataStepModel } from "domain/models/accreditSteps/ProviderDataStep/providerDataStepModel";

export interface IAccreditSteps {
    providerDataStep: ProviderDataStepModel
    addressDataStep: AddressDataStepModel    
}