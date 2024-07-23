import { Grid } from "@mui/material";
import FormRadioGroup from "components/Form/FormRadioGroup";
import FormTextField from "components/Form/FormTextField";
import FormTextFieldMask from "components/Form/FormTextFieldMask";
import GridContainer from "components/GridContainer";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import { PROVIDER_DOCUMENT_TYPE_OPTIONS } from "options/providerDocumentTypeOptions";
import { useFormContext, useWatch } from "react-hook-form";
import { cpfMask, cnpjMask } from "configs/maskConfig";
import { EDocumentType } from "domain/enums/eDocumentType";
import { useEffect, useState } from "react";
import FormSelect from "components/Form/FormSelect";
import { PROVIDER_TYPE_OPTIONS } from "options/providerTypeOptions";
import { SPECIALTY_OPTIONS } from "options/specialtyOptions";


const ProviderDataStep = () => {

    const { formState, control, setValue, getValues } = useFormContext<AccreditStepsModel>();
    const { errors } = formState

    const providerDocumentType = useWatch({
        control,
        name: "providerDataStep.providerData.providerDocumentType",
    });

    const providerDocumentTypeNumber = parseInt(`${providerDocumentType}`, 10);

    const [documentMask, setDocumentMask] = useState<string[]>(cpfMask.mask);

    useEffect(() => {   
        console.log(getValues("providerDataStep.providerData.specialty"));
    }, []);

    useEffect(() => {        
        setDocumentMask(providerDocumentTypeNumber === EDocumentType.CPF ? cpfMask.mask : cnpjMask.mask);
    }, [providerDocumentTypeNumber]);

    return (
        <>
            <GridContainer container>

                <Grid item xs={12}>
                    <FormRadioGroup
                        required
                        size="small"
                        legend="Tipo"
                        control={control}
                        name="providerDataStep.providerData.providerDocumentType"
                        options={PROVIDER_DOCUMENT_TYPE_OPTIONS}
                        fieldError={errors.providerDataStep?.providerData?.providerDocumentType}
                    >
                    </FormRadioGroup>
                </Grid>

                <Grid item xs={6}>
                    <FormTextField required
                        name="providerDataStep.providerData.name"
                        fieldError={errors.providerDataStep?.providerData?.name}
                        control={control}
                        label="Nome" />
                </Grid>

                <Grid item xs={6}>
                    <FormTextFieldMask required
                        name="providerDataStep.providerData.document"
                        fieldError={errors.providerDataStep?.providerData?.document}
                        control={control}
                        setValue={setValue}                        
                        mask={documentMask}
                        label={(providerDocumentTypeNumber === EDocumentType.CPF ? "CPF" : "CNPJ")} 
                        />
                </Grid>

                <Grid item xs={12}>
                    <FormSelect
                        required
                        control={control}
                        size='small'
                        name="providerDataStep.providerData.providerType"
                        fieldError={errors.providerDataStep?.providerData?.providerType}
                        label="Tipo de prestador"                        
                        options={PROVIDER_TYPE_OPTIONS}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormSelect
                        required
                        control={control}
                        size='small'
                        name="providerDataStep.providerData.specialty"
                        fieldError={errors.providerDataStep?.providerData?.specialty as any}
                        label="Especialidade"
                        options={SPECIALTY_OPTIONS}
                        multiple
                        multipleCheckBox
                    />
                </Grid>

                

            </GridContainer>
        </>
    )
}

export default ProviderDataStep