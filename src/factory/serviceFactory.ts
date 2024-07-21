import { IHttp } from "domain/contract/http/iHttp";
import HttpClient from "infra/httpClient";
import ZipCodeService from "services/zipCodeService";

export default class ServiceFactory implements IHttp {

    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {
    }
    createZipCodeService(): ZipCodeService {
        return new ZipCodeService(this.httpClient, 'https://viacep.com.br/ws');
    }
}