import React from 'react';
import { BrowserRouter } from 'react-router-dom';


//Components
import Layout from '../Layout';
import { Header } from '../../components/Header/Header.component';
import GlobalProvider from '../../providers/Global.provider';
import { Menu } from '../Menu/Menu.component';
import { Routes } from '../Routes/Routes.component';

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Menu/>
        <Header/>
        <Layout>
          <Routes/>
        </Layout>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
