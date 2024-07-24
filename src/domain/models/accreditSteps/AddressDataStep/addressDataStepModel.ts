import { AddressDataModel } from "./addressDataModel";
import { AddressModel } from "./addressModel";

export class AddressDataStepModel {
  
  addressData: AddressDataModel;

  constructor() {
    this.addressData = new AddressDataModel(
      new AddressModel('', '', '', '', '', '', '')
    );
  }
}