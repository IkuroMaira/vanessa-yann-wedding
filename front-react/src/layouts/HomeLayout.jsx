import React from "react";
import Header from "../components/common/Header.jsx";
import { Element } from "react-scroll";
import styles from "./HomeLayout.module.css";
import HeroSection from "../components/sections/HeroSection.jsx";
import InvitationSection from "../components/sections/InvitationSection.jsx";
import InfoSection from "../components/sections/InfoSection.jsx";
import WeddingMap from "../components/sections/WeddingMap.jsx";

function HomeLayout() {
    return (
        <>
            <Header/>

            <div className={styles.main}>
                <Element name="hero-section">
                    <HeroSection />
                </Element>

                <Element name="invit-section">
                    <InvitationSection />
                </Element>

                <Element name="info-section">
                    <InfoSection />
                </Element>

                <Element name="wedding-map">
                    <WeddingMap />
                </Element>
            </div>
        </>
    )
}

export default HomeLayout