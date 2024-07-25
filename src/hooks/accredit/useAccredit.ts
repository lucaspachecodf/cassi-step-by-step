import { AxiosError } from 'axios';
import IAccreditedResponseDto from 'domain/dtos/response/accredited/iAccreditedResponseDto';
import { IResultWithListDto } from 'domain/dtos/response/result/iResultWithListDto';
import { ITypeResponseDto } from 'domain/dtos/response/result/iTypeResponseDto';
import { AccreditStepsModel } from 'domain/models/accreditSteps/accreditStepsModel';
import useSpinner from "hooks/alert/useSpinner"
import useServiceContainer from "hooks/serviceContainer/useServiceContainer"

const useAccredit = () => {

    const spinner = useSpinner()
    const { accreditService } = useServiceContainer()

    const handleSave = (accreditStepsModel: AccreditStepsModel): Promise<IAccreditedResponseDto> => {
        return new Promise(async (resolve, reject) => {
            //spinner.show('Aguarde, estamos fazendo o seu credenciamento')
            await accreditService.save(accreditStepsModel).then((result) => {                
                resolve(result)
            }).catch((error: AxiosError<IResultWithListDto<ITypeResponseDto>>) => {
                reject(error)
            }).finally(() => {
                spinner.hidden()
            })
        });
    }

    return {        
        handleSave
    }
}

export default useAccredit