import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";

import { Text, Header, Main, Footer, Layout } from '@reciplease/components';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header/>
        <Main/>
        <Footer/>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
