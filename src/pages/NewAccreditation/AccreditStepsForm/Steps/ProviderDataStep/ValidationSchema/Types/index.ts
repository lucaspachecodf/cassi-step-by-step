import { IProviderDataModel } from "domain/models/accreditSteps/ProviderDataStep/providerDataModel";

export interface ProviderDataSchemaModel extends IProviderDataModel {}

export type AccreditProviderDataStepsSchemaModel = {
  providerData: ProviderDataSchemaModel;
};

export type ProviderDataStepsSchemaModel = {
  providerDataStep: AccreditProviderDataStepsSchemaModel;
};
