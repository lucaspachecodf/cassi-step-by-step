import { IdentificationModel, IIdentificationModel } from './identificationModel';

export interface IProviderDataModel extends IIdentificationModel {    
    providerType: string;
    specialty: string[];
    providerDocumentType: string;
  }

export class ProviderDataModel extends IdentificationModel implements IProviderDataModel {
    constructor(name: string, document: string, readonly providerType: string, readonly specialty: string[], readonly providerDocumentType: string) {
        super(name, document);
    }
}