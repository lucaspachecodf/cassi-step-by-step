import IZipCodeResponseDto from 'domain/dtos/response/zipCode/iZipCodeResponseDto';
import { AddressModel } from 'domain/models/accreditSteps/AddressDataStep/addressModel';
import useSpinner from 'hooks/alert/useSpinner';
import useService from 'hooks/serviceContainer/useServiceContainer';

const useZipCode = () => {
    
    const spinner = useSpinner()
    const { zipCodeService } = useService()    

    const fillZipCodeData = async (zipCode: string) => {
        spinner.show('Buscando o endereço')
        
        return await zipCodeService.getAddressByZipCode(zipCode).then((data: IZipCodeResponseDto) => {                    
            if (!data)
                throw new Error('Houve problemas ao busca o CEP')
            
            return AddressModel.mapperDtoToModel(data, '')
        })
        .finally(() => {
            spinner.hidden()  
        })
    }
    
    return { fillZipCodeData }
}

export default useZipCode