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
import Label from "components/Label";

const ProviderDataStep = () => {

    const { formState, control, setValue } = useFormContext<AccreditStepsModel>();
    const { errors } = formState

    const providerDocumentType = useWatch({
        control,
        name: "providerDataStep.providerData.providerDocumentType",
    });

    const providerDocumentTypeNumber = parseInt(`${providerDocumentType}`, 10);

    const [documentMask, setDocumentMask] = useState<string[]>(cpfMask.mask);

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

                    <FormTextField
                        required
                        topLabel='Nome'
                        name="providerDataStep.providerData.name"
                        placeholder="Informe o nome..."
                        fieldError={errors.providerDataStep?.providerData?.name}
                        control={control} />
                </Grid>

                <Grid item xs={6}>
                    <FormTextFieldMask 
                        required
                        topLabel={(providerDocumentTypeNumber === EDocumentType.CPF ? "CPF" : "CNPJ")}
                        name="providerDataStep.providerData.document"
                        fieldError={errors.providerDataStep?.providerData?.document}
                        control={control}
                        placeholder={providerDocumentTypeNumber === EDocumentType.CPF ? '000.000.000-00': '00.000.000/0000-00'}
                        setValue={setValue}
                        mask={documentMask}                        
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormSelect
                        required
                        control={control}
                        size='small'
                        name="providerDataStep.providerData.providerType"
                        placeholder="Selecione o tipo"
                        fieldError={errors.providerDataStep?.providerData?.providerType}
                        topLabel="Tipo do prestador"
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
                        topLabel="Especialidade"
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