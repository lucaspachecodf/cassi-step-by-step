export type ProviderDataSchemaModel = {  
  name: string;
  document: string;
  providerType: string,
  specialty: string[],
  providerDocumentType: number
};

export type AccreditProviderDataStepsSchemaModel = {
    providerData: ProviderDataSchemaModel
}

export type ProviderDataStepsSchemaModel = {
    providerDataStep: AccreditProviderDataStepsSchemaModel
};