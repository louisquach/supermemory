import React from 'react'
import './homepage.scss'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import SideBar from '../../components/SideBar/sidebar'
import MainContent from '../../components/mainContent/mainContent'


const HomePage = () => {
    return (
        <div className='homepage__container'>
            <NavBar/>
            <SideBar/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default HomePage;