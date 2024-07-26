import BreadcrumbsNavigation from "components/BreadcrumbsNavigation";
import Image from "components/Image";
import imageRegister from '../../assets/images/image_register.png'
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import { Box, Grid } from "@mui/material";
import GridContainer from "components/GridContainer";
import Div from "components/Div";
import AccreditStepsForm from "./AccreditStepsForm";
import { AccreditStepsProvider } from "contexts/accreditSteps/providers";

const NewAccreditation = () => {
  return (
    <AccreditStepsProvider>
      <GridContainer columnSpacing={0} item justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={5}>
          <Div sx={{ height: '100vh' }}>
            <BreadcrumbsNavigation />
            <Image src={imageRegister} width={450} height={320} />
            <Title bold variant="h5">Seja um novo prestador CASSI</Title>
            <Paragraph>
              Para se credenciar à CASSI o primiero passo é registrar a sua proposta
              que será avaliada de acordo com a necessidade de oferta dos serviços
              na localidade.
            </Paragraph>
          </Div>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Div sx={{ height: '100vh' }}>
            <AccreditStepsForm />
          </Div>
        </Grid>
      </GridContainer>
    </AccreditStepsProvider >
  );
};

export default NewAccreditation;
