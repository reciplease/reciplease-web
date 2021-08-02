import React from 'react';
import './App.css';
import styles from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Main className={styles.content} />
        <Navbar className={styles.stickBottom} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
