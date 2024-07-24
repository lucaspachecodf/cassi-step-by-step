import { IAddressModel } from "domain/models/accreditSteps/AddressDataStep/addressModel";

export interface AddressSchemaModel extends IAddressModel {
  
}

export type AddressDataSchemaModel = {
  address: AddressSchemaModel
}

export type AccreditAddressDataStepsSchemaModel = {
  addressData: AddressDataSchemaModel;
};

export type AddressDataStepsSchemaModel = {
  addressDataStep: AccreditAddressDataStepsSchemaModel;
};
