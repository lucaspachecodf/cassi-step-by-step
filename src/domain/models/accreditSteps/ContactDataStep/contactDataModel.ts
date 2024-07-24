export interface IContactDataModel {
  name: string;
  email: string;
  cellphone?: string | undefined;
  phone?: string | undefined;
}

export class ContactDataModel implements IContactDataModel {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly cellphone?: string | undefined,
    readonly phone?: string | undefined
  ) {}
}
