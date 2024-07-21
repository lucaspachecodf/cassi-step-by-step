import IZipCodeResponseDto from "domain/dtos/response/zipCode/iZipCodeResponseDto";

export class AddressModel {
  constructor(
    readonly zipCode: string,
    readonly address: string,
    readonly state: string,
    readonly city: string,
    readonly district: string,
    readonly number: number,
    readonly addressReference: string
  ) {}

  static mapperDtoToModel(
    zipCodeResponse: IZipCodeResponseDto,
    number: number
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
