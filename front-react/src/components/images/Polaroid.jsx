import React from "react";
import styles from './Polaroid.module.css';
import { ParallaxProvider, Parallax} from "react-scroll-parallax";

export default function Polaroid({ imageSrc, alt, variant = 'first', parallaxProps = {} }) {
    const getPolaroidClass = () => {
        switch(variant) {
            case 'first':
                return styles.polaroidFirst;
            case 'second':
                return styles.polaroidSecond;
            case 'third':
                return styles.polaroidThird;
            default:
                return styles.polaroidFirst;
        }
    };

    return (
        <ParallaxProvider>
            <div className={styles.polaroidContainer}>
                <Parallax {...parallaxProps}>
                    <div className={getPolaroidClass()}>
                        <div className={styles.imageContainer}>
                            <img src={imageSrc} alt={alt} />
                        </div>
                    </div>
                </Parallax>
            </div>
        </ParallaxProvider>
    )
}