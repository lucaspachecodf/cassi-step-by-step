import IZipCodeResponseDto from "domain/dtos/response/zipCode/iZipCodeResponseDto";

export interface IAddressModel {
  zipCode: string;
  address: string;
  state: string;
  city: string;
  district: string;
  number: string;
  complement?: string | undefined;
}

export class AddressModel {
  constructor(
    readonly zipCode: string,
    readonly address: string,
    readonly state: string,
    readonly city: string,
    readonly district: string,
    readonly number: string,
    readonly complement?: string | undefined
  ) {}

  static mapperDtoToModel(
    zipCodeResponse: IZipCodeResponseDto,
    number: string
  ) {
    return new AddressModel(
      zipCodeResponse.cep,
      zipCodeResponse.logradouro,
      zipCodeResponse.uf,
      zipCodeResponse.localidade,      
      zipCodeResponse.bairro,
      number,
      zipCodeResponse.complemento
    );
  }
}
