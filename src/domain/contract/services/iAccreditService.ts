import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import IAccreditedResponseDto from "domain/dtos/response/accredited/iAccreditedResponseDto";

export interface IAccreditService {    
    save(models: AccreditStepsModel): Promise<IAccreditedResponseDto>
}
