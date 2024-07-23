import { IdentificationModel } from './identificationModel';

export interface IProviderDataModel {
    name: string;
    document: string;
    providerType: string;
    specialty: string[];
    providerDocumentType: number;
  }

// export class ProviderDataModel extends IdentificationModel {
//     constructor(name: string, document: string, readonly providerType: string, readonly specialty: string[], readonly providerDocumentType?: string) {
//         super(name, document);
//     }
// }