import { IHttp } from "domain/contract/http/iHttp";
import { IAccreditService } from "domain/contract/services/iAccreditService";
import IAccreditedResponseDto from "domain/dtos/response/accredited/iAccreditedResponseDto";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import HttpClient from "infra/httpClient";

export default class AccreditService implements IHttp, IAccreditService {
    constructor(readonly httpClient: HttpClient, readonly baseUrl: string, readonly token: string) {

    }

    async save(accreditStepModel: AccreditStepsModel): Promise<IAccreditedResponseDto> {
        return new Promise(async (resolve, reject) => {
            
            let result: IAccreditedResponseDto = {
                id: 12,
                protocolNumber: '123456'
            };
            resolve(result);
        })
    }
}