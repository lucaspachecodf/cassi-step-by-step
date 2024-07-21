import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const Palette = {
  background: 'white',
  primary: {    
    main: '#0a2d4b',
    light: '#315b7c',
    dark: '#040d17',
  },
  secondary: {
    main: '#d0c479',
    light: '#d9cf93',
    dark: '#918954',
  },
}

// A custom theme for this app
let theme = createTheme({ 
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        img {          
          height: auto;
          max-width: 100%;
        }
      `,
    }    
  }, 
  palette: {
    background: {
      default: Palette.background,
    },
    primary: Palette.primary,
    secondary: Palette.secondary,
    error: {
      main: red.A400,
    }    
  }
});

theme = responsiveFontSizes(theme);

export default theme;