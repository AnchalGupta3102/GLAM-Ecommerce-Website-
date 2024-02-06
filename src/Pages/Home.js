import React from 'react'
import Navbar from '../Component/Navbar';
import Announcement from '../Component/Announcement';
import Slider from '../Component/Slider';
import Categories from '../Component/Categories';
import Product from '../Component/Product';
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';

const Home = ()=>{
    
    return(
        <>
            <div>
                <Announcement/>
                <Navbar/>
                <Slider/>
                <Categories/>
                <Product/>
                <Newsletter/>
                <Footer/>
            </div>
        </>
    )
}
export default Home;