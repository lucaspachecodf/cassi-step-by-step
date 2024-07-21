import ServiceFactory from "factory/serviceFactory";
import AxiosAdapter from "infra/axiosAdapter";

const useServiceContainer = () => {
    
    const httpClient = new AxiosAdapter();
    const baseUrl = '';    
    const serviceFactory = new ServiceFactory(httpClient, baseUrl);    

    const zipCodeService = serviceFactory.createZipCodeService();    

    return {
        zipCodeService        
    }
}

export default useServiceContainer