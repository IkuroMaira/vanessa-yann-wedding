import React from "react";
import Header from "../components/common/Header.jsx";
import { Element } from "react-scroll";
import styles from "./HomeLayout.module.css";
import HeroSection from "../components/sections/HeroSection.jsx";
import InvitationSection from "../components/sections/InvitationSection.jsx";
import InfoSection from "../components/sections/InfoSection.jsx";
import WeddingMap from "../components/sections/WeddingMap.jsx";
import AcknowledgmentSection from "../components/sections/AcknowledgmentSection.jsx";
import Polaroid from "../components/images/Polaroid.jsx";
import imgCouple1 from "../assets/photos/couple-stare.jpg";
import imgCouple2 from '../assets/photos/couple-vue-NB.png';
import imgCouple3 from '../assets/photos/2022-couple-NB.png';

function HomeLayout() {
    return (
        <>
            <Header/>

            <div className={styles.main}>
                <Element name="hero-section">
                    <HeroSection />
                </Element>

                <Element>
                    <Polaroid
                        imageSrc={imgCouple1}
                        alt="Photo de couple"
                        variant="first"
                        parallaxProps={{ rotate: [-3, 3] }}
                    />
                </Element>

                <Element name="invit-section">
                    <InvitationSection />
                </Element>

                <Element>
                    <Polaroid
                        imageSrc={imgCouple2}
                        alt="Photo de couple"
                        variant="second"
                        parallaxProps={{ rotate: [1, -1] }}
                    />
                </Element>

                <Element name="info-section">
                    <InfoSection />
                </Element>

                <Element name="wedding-map">
                    <WeddingMap />
                </Element>

                <Element>
                    <Polaroid
                        imageSrc={imgCouple3}
                        alt="Photo de couple"
                        variant="third"
                        parallaxProps={{ rotate: [-2, 2] }}
                    />
                </Element>

                <Element name="acknowledgment">
                    <AcknowledgmentSection />
                </Element>
            </div>
        </>
    )
}

export default HomeLayout