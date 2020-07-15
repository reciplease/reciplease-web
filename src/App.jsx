import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Header/>
        <Main/>
        <Footer/>
      </Layout>
    </>
  )
}

export default App;
