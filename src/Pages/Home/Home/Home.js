import React from 'react';
import Banner from '../Banner/Banner';
import Menues from '../Menues/Menues';
import Services from '../Services/Services';
import  Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Menues></Menues>
            <Blog></Blog>
           <Footer></Footer>
        </div>
    );
};

export default Home;