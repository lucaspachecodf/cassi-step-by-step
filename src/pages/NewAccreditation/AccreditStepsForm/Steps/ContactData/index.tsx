import { useFormContext } from "react-hook-form"
import FormTextField from "components/Form/FormTextField";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import GridContainer from "components/GridContainer";
import { Grid } from "@mui/material";
import Label from "components/Label";
import FormTextFieldMask from "components/Form/FormTextFieldMask";
import { cellphoneMask, phoneMask } from "configs/maskConfig";

const ContactDataStep = () => {

    const { formState, control, setValue } = useFormContext<AccreditStepsModel>();
    const { errors } = formState

    return (
        <>
            <GridContainer container >
                <Grid item xs={12}>
                    <FormTextField required
                        name="contactDataStep.contactData.name"
                        fieldError={errors.contactDataStep?.contactData?.name}
                        control={control}
                        label="Nome para contato" />
                </Grid>
                <Grid item xs={6}>
                    <FormTextFieldMask
                        control={control}
                        setValue={setValue}
                        name="contactDataStep.contactData.cellphone"
                        fieldError={errors.contactDataStep?.contactData?.cellphone}
                        label="Telefone Celular"
                        mask={cellphoneMask.mask} />
                </Grid>
                <Grid item xs={6}>
                    <FormTextFieldMask
                        control={control}
                        setValue={setValue}
                        name="contactDataStep.contactData.phone"
                        fieldError={errors.contactDataStep?.contactData?.phone}
                        label="Telefone Fixo"
                        mask={phoneMask.mask} />
                </Grid>

                {
                    errors.contactDataStep?.contactData?.root?.message && (
                        <Grid paddingLeft={2} xs={12}>
                            <Label variant="caption">
                                {errors.contactDataStep?.contactData?.root?.message}
                            </Label>
                        </Grid>
                    )
                }

                <Grid item xs={12}>
                    <FormTextField required
                        name="contactDataStep.contactData.email"
                        fieldError={errors.contactDataStep?.contactData?.email}
                        control={control}
                        label="Email" />
                </Grid>

            </GridContainer>
        </>
    )
}

export default ContactDataStep