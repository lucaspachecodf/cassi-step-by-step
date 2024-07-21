import { AddressDataModel } from "./addressDataModel";
import { AddressModel } from "domain/models/addressModel";

export class AddressDataStepModel {
  addressData: AddressDataModel;

  constructor() {
    this.addressData = new AddressDataModel(
      new AddressModel("", "", "", "", "", 0, "")
    );
  }
}
