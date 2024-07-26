import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Drawer, IconButton, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { HelpOutline as HelpIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const FAQDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <>
      <IconButton
        disableRipple
        onClick={toggleDrawer(true)}
      >
        <Typography variant="body2">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HelpIcon />
            <Typography variant="body2">Perguntas Frequentes</Typography>
          </Box>
        </Typography>
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: isMobile ? '50%' : 600,
          },
        }}>
        <Box sx={{ width: isMobile ? '100%' : 600, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Perguntas Frequentes
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Documentação necessária - Pessoa física</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Resposta 1</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Documentação necessária - Pessoajurídica</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Resposta 2</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Conheça as vantagens de ser um credenciado</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Resposta 3</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </>
  );
};

export default FAQDrawer;