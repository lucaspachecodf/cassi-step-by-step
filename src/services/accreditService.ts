import { IHttp } from "domain/contract/http/iHttp";
import { IAccreditService } from "domain/contract/services/iAccreditService";
import IAccreditedResponseDto from "domain/dtos/response/accredited/iAccreditedResponseDto";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import HttpClient from "infra/httpClient";

export default class AccreditService implements IHttp, IAccreditService {
  constructor(
    readonly httpClient: HttpClient,
    readonly baseUrl: string,
    readonly token: string
  ) {}

  generateRandomNumericProtocol(length: number): string {
    const characters = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  async save(
    accreditStepModel: AccreditStepsModel
  ): Promise<IAccreditedResponseDto> {
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        let result: IAccreditedResponseDto = {
          id: 12,
          protocolNumber: this.generateRandomNumericProtocol(12),
        };
        resolve(result);
      }, 4000);
    });
  }
}
