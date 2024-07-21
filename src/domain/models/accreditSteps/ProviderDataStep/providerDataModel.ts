import { IdentificationModel } from './identificationModel';

export class ProviderDataModel extends IdentificationModel {
    constructor(name: string, document: string, readonly providerType: number, readonly specialty: number) {
        super(name, document);
    }
}