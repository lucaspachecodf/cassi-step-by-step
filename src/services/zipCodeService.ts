import { IHttp } from "domain/contract/http/iHttp";
import IZipCodeResponseDto from "domain/dtos/response/zipCode/iZipCodeResponseDto";
import HttpClient from "infra/httpClient";

export default class ZipCodeService implements IHttp {

    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {
    }

    async getAddressByZipCode(zipCode: string): Promise<IZipCodeResponseDto> {
        const itemsData = await this.httpClient.get<IZipCodeResponseDto>(`${this.baseUrl}/${zipCode}/json`);
        return itemsData;
    }
}