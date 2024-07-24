import { IAccreditSteps } from "domain/contract/accreditSteps/iAccreditSteps";
import { AddressDataStepModel } from "./AddressDataStep/addressDataStepModel";
import { ProviderDataStepModel } from "./ProviderDataStep/providerDataStepModel";
import { ContactDataStepModel } from "./ContactDataStep/contactDataStepModel";
import { ConfirmationDataStepModel } from "./ConfirmationDataStep/contactDataStepModel";
import { AttachmentDataStepModel } from "./AttachmentDataStep/attachmentDataStepModel";

export class AccreditStepsModel implements IAccreditSteps  {

    readonly providerDataStep: ProviderDataStepModel
    readonly addressDataStep: AddressDataStepModel
    readonly contactDataStep: ContactDataStepModel
    readonly confirmationDataStep: ConfirmationDataStepModel
    readonly attachmentDataStep: AttachmentDataStepModel

    constructor() {
        this.providerDataStep = new ProviderDataStepModel()
        this.addressDataStep = new AddressDataStepModel()
        this.contactDataStep = new ContactDataStepModel()
        this.confirmationDataStep = new ConfirmationDataStepModel()
        this.attachmentDataStep = new AttachmentDataStepModel()
    }
}