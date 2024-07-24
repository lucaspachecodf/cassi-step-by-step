export interface IIdentificationModel {
    name: string;
    document: string;
}

export class IdentificationModel implements IIdentificationModel {
    constructor (readonly name: string, readonly document: string) { }
}