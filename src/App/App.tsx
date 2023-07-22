import { BrowserRouter } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Ways from '../Ways';
import Contact from '../Components/Contact/contact';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import { AuthProvider } from '../contexts/auth';
import ConfirmDelete from '../Components/modal/confirm-delete';
import { useState } from 'react';

function App() {
  const [modalDelete, setModalDelete] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <GlobalStyle />
          <Contact />
          <Nav />
          <Ways />
          <ConfirmDelete
            modalDelete={modalDelete}
            setModalDelete={setModalDelete}
          />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
