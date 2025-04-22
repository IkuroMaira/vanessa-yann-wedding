import React from "react";
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import {translations} from "../../datas/languages/translations.js";
import styles from "./OnePage.module.css";

// import imgCoupleStare from "../../assets/photos/couple-stare.jpg";
// import imgCoupleVue from "../../assets/photos/couple-vue-NB.png";
// import iconLavender from "../../assets/icons/icon-header-lavender.png";
// import imgCouple2022 from "../../assets/photos/2022-couple-NB.png";

export default function OnePage() {
    const {language} = useLanguage()

    return (
        <>
            <div className={styles.main}>
                <div className={`${styles.contentBackground} ${styles.coverImage}`}>
                    <div className={styles.title}>
                        <span className={styles.save}>{translations[language][0].title.save}</span>
                        <span className={styles.the}>{translations[language][0].title.the}</span>
                        <span className={styles.date}>{translations[language][0].title.date}</span>
                    </div>

                    <div className={styles.weddingInfo}>
                        <div>{translations[language][0].weddingInfo.line1}</div>
                        <div>{translations[language][0].weddingInfo.line2.paragraphV}</div>
                        <div>{translations[language][0].weddingInfo.line2.paragraphEt}</div>
                        <div>{translations[language][0].weddingInfo.line2.paragraphY}</div>
                    </div>
                </div>
            </div>

            {/*OLD*/}
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.contentBackground} className={styles.coverImage}>
                        <div className={styles.title}>
                            <span className={styles.save}></span>
                            <span  className={styles.the}></span>
                            <span className={styles.date}></span>
                        </div>

                        <div className={styles.weddingInfo}>
                            <div className={styles.pourLeMariage} className={styles.line1}></div>
                            <div className={styles.names} className={styles.line2}>
                                <p className={styles.paragraphWedding} className={styles.paragraphV}></p>
                                <p className={styles.paragraphWedding} className={styles.paragraphEt}></p>
                                <p className={styles.paragraphWedding} className={styles.paragraphY}></p>
                            </div>
                            <div className={styles.weddingDate}></div>
                            <div className={styles.location}></div>
                        </div>
                    </div>
                </div>

                {/*<div className={styles.polaroidContainer}>*/}
                {/*    <div className={styles.polaroidWrapper}>*/}
                {/*        <div className={styles.polaroids} className={styles.polaroid1}>*/}
                {/*            <div className={styles.polaroid}>*/}
                {/*                <img src={imgCoupleStare} alt="Photo des fiancés 1"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className={styles.invitationText}>*/}
                {/*            <p className={styles.paragraph1} className={styles.paragraph}></p>*/}
                {/*            <p className={styles.paragraph2}className={styles.paragraph}></p>*/}
                {/*        </div>*/}

                {/*        <div className={styles.polaroids} className={styles.polaroid2}>*/}
                {/*            <div className={styles.polaroid}>*/}
                {/*                <img src={imgCoupleVue} alt="Photo des fiancés 2"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className={styles.containerForm}>*/}
                {/*            <img src={iconLavender} className={styles.iconForm} alt="icône de lavande"/>*/}

                {/*            <div className={styles.formText}></div>*/}
                {/*        </div>*/}

                {/*        <div className={styles.polaroids} className={styles.polaroid3}>*/}
                {/*            <div className={styles.polaroid}>*/}
                {/*                <img src={imgCouple2022} alt="Photo des fiancés 3"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}