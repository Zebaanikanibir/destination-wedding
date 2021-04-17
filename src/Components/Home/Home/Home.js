import React from 'react';
import Header from '../Header/Header';
import About from './About/About';
import './Home.css';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Form from './Form/Form'
import Footer from './Footer/Footer';
import ExtraPart from '../ExtraPart/ExtraPart';
const Home = () => {
    return (
        <div>
        <Header></Header>
        <Services></Services>
        <About></About>
        <Reviews></Reviews>
        <ExtraPart></ExtraPart>
        <Footer></Footer>
        <Form></Form>
        
        </div>
    );
};

export default Home;