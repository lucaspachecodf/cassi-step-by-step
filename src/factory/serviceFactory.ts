import { IHttp } from "domain/contract/http/iHttp";
import HttpClient from "infra/httpClient";
import AccreditService from "services/accreditService";
import ZipCodeService from "services/zipCodeService";

export default class ServiceFactory implements IHttp {

    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {
    }
    createZipCodeService(): ZipCodeService {
        return new ZipCodeService(this.httpClient, 'https://viacep.com.br/ws');
    }

    createAccreditService(token: string): AccreditService {
        return new AccreditService(this.httpClient, '', token)
    }
}