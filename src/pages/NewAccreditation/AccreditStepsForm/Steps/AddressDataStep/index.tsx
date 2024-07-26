import { useFormContext } from "react-hook-form"
import { OptionsModel } from "domain/models/index";
import FormTextField from "components/Form/FormTextField";
import { zipCodeMask } from "configs/maskConfig";
import { useEffect, useState } from "react";
import useZipCode from "hooks/address/useZipCode";
import useSnackBar from "hooks/alert/useSnackBar";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import FormTextFieldMask from "components/Form/FormTextFieldMask";
import GridContainer from "components/GridContainer";
import { Grid } from "@mui/material";
import FormSelect from "components/Form/FormSelect";
import { FEDERATIVE_UNITS_OPTIONS } from "options/federativeUnitsOptions";

const AddressDataStep = () => {

    const { formState, control, setValue, getValues } = useFormContext<AccreditStepsModel>();
    const { errors } = formState
    const { fillZipCodeData } = useZipCode()
    const [optionsFederativeUnits] = useState<OptionsModel[]>(FEDERATIVE_UNITS_OPTIONS as OptionsModel[])
    const snackBar = useSnackBar()

    const handleZipCode = async (zipCode: string) => {
        await fillZipCodeData(zipCode).then((data) => {
            if (data) {
                setValue('addressDataStep.addressData.address.address', data.address)
                setValue('addressDataStep.addressData.address.district', data.district)
                setValue('addressDataStep.addressData.address.city', data.city)
                setValue('addressDataStep.addressData.address.state', data.state)
                setValue('addressDataStep.addressData.address.complement', data.complement)
            }
        }).catch((error: Error) => {
            snackBar.show(error?.message, 'error')
        })
    }

    return (
        <>
            <GridContainer container>
                <Grid item xs={4}>
                    <FormTextFieldMask
                        required
                        topLabel='Cep'
                        name="addressDataStep.addressData.address.zipCode"
                        fieldError={errors.addressDataStep?.addressData?.address?.zipCode}
                        onBlur={() => handleZipCode(getValues('addressDataStep.addressData.address.zipCode'))} control={control} setValue={setValue} mask={zipCodeMask.mask}
                    />
                </Grid>
                <Grid item xs={8}>
                    <FormTextField required
                        name="addressDataStep.addressData.address.address"
                        fieldError={errors.addressDataStep?.addressData?.address?.address}
                        control={control}
                        topLabel="Endereço" />
                </Grid>

                <Grid item xs={3}>
                    <FormSelect
                        required
                        control={control}
                        size='small'
                        name="addressDataStep.addressData.address.state"
                        fieldError={errors.addressDataStep?.addressData?.address?.state}
                        topLabel="UF"
                        options={optionsFederativeUnits}
                    />
                </Grid>

                <Grid item xs={9} marginTop={1}>
                    <FormTextField
                        required
                        name="addressDataStep.addressData.address.city"
                        fieldError={errors.addressDataStep?.addressData?.address?.city}
                        control={control}
                        topLabel="Cidade" />
                </Grid>

                <Grid item xs={6}>
                    <FormTextField required
                        name="addressDataStep.addressData.address.district"
                        fieldError={errors.addressDataStep?.addressData?.address?.district}
                        control={control}
                        topLabel="Bairro" />
                </Grid>

                <Grid item xs={6}>
                    <FormTextField required
                        name="addressDataStep.addressData.address.number"
                        fieldError={errors.addressDataStep?.addressData?.address?.number}
                        control={control}
                        topLabel="Número" />
                </Grid>

                <Grid item xs={12}>
                    <FormTextField
                        name="addressDataStep.addressData.address.complement"
                        fieldError={errors.addressDataStep?.addressData?.address?.complement}
                        control={control}
                        topLabel="Complemento" />
                </Grid>
            </GridContainer>
        </>
    )
}

export default AddressDataStep