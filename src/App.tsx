import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Header/>
                <Main/>
                <Footer/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
