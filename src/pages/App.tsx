import Container from 'components/Container';
import Header from 'components/Header';
import { CssBaseline, GlobalStyles } from '@mui/material';
import RootRoute from 'routes/RootRoute';
import useStyles from 'styles/styles';
import Footer from 'components/Footer';

function App() {

  const styles = useStyles()

  return (
    <>
      <GlobalStyles styles={styles.globalStyles} />
      <CssBaseline />
      <Header />
      <Container spacing={2}>
        <RootRoute />
      </Container>
      <Footer />
    </>
  );
}

export default App;
