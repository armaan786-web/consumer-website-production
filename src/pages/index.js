import React, {useState} from 'react'
import AlreadyListed from '../components/Already_Listed/AlreadyListed'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/How_it_Works/How_it_works'
import AnyKind from '../components/AnyKind'
import Partner from '../components/Partner/Partner'
import OurHappyPartners from '../components/OurHappyPartners/OurHappyPartners'
import OnitFile from '../components/OnitCon'
import SearchBox from '../components/SearchBox'
import Footer from '../components/Footer/Footer'
import { FootDesc } from "./StyledElements"


const Home = () => {

    return (
        <>
            <HeroSection/>
            {/* <SearchBox/> */}
            <HowItWorks/>
            <AnyKind />
            <FootDesc>Our Helpdesk will support you for services, availing offers / discounts through schemes, refunds etc . Mail us with details of your name, phone number and specific requirement.</FootDesc>
            <OnitFile />
            <Footer/>
        </>
    )
}

export default Home;