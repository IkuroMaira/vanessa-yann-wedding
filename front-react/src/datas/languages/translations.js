import styles from "../../components/sections/InfoSection.module.css";
import React from "react";

export const translations = {
    en: [
        {
            buttonText: "EN", // Texte pour passer à l'anglais
            title: {
                save: "Save",
                the: "the",
                date: "date"
            },
            weddingInfo: {
                line1: "Pour le mariage",
                line2: {
                    paragraphV: "Vanessa",
                    paragraphEt: "&",
                    paragraphY: "Yann"
                },
                weddingDate: "Le 26 juillet 2025,",
                location: "à Bouc-Bel-Air"
            },
            invitationText: {
                paragraph1: "Vous êtes invités à notre mariage qui se déroulera le 26 juillet 2025 à Bouc-Bel-Air pour la mairie, puis au Pavillon d'Aurabelle à Gréoux-Les-Bains.",
                paragraph2: "Les informations complémentaires suivront bientôt."
            },
            formReminder: {
                text: "Pensez à remplir le formulaire.",
            },
            timer: {
                days: "jours",
                hours: "heures",
                loading: "Chargement...",
                weddingDay: "JOUR J !",
                weddingEve: "Veille du mariage !",
                thanks: "Merci d'avoir participé à cette célébration."
            },
            mapText: {
                mapTitle: "Comment venir",
                locationTitle: "Lieux de mariage",
                ceremonyLocation: "Mairie de Bouc Bel Air : Rue de l'Hôtel de ville, 13320 Bouc-Bel-Air",
                ceromonyText: "Cérémonie civile",
                scheduleCeremonyInfo: "26/07/2025 à 14h30 (30 min)",
                weddingLocaton: "Pavillon d'Aurabelle, 04800 Gréoux-les-Bains",
                weddingLocationText: "Lieu du mariage",
                scheduleVenueInfo: "Du 26/07/2025 (17h) au 27/07/2025 (3h)",
                transportTitle: "Moyens de transport",
                airport: "Aéroport Marseille Provence",
                TGV: "Gare Aix-En-Provence TGV",
                carTitle: "Option location de voiture",
                carText: "La gare et l'aéroport offrent de nombreuses possibilités de location."
            },
            info: {
            titleProgramme: "Le programme",
            planningLine1: "15h00 : Rendez-vous à la mairie",
            planningLine2: "15h40 : Départ pour le Pavillon d’Aurabelle",
            planningLine3: "(environ 1h de route)",
            planningLine4: "16h30 : Arrivée au Pavillon",
            planningLine5: "17h30 : Cérémonie franco-indienne",
            planningLine6: "20h00 : Début de la soirée",
            planningLine7: "21h00 : Dîner",
            planningLine8: "(Les enfants pourront être servis plus tôt)",
            merci: "Merci de prévoir deux tenues : une pour les cérémonies et une pour la soirée. Aucune couleur spécifique n'est demandée (sauf pour les témoins).",
            brunch: "Le brunch au pavillon d'Aurabelle tout comme le logement est compris et gratuit - (chambre de 6 personnes avec toilettes et salle de bain ).",
            contact: "Merci de nous contacter pour que nous puissions vous aider si vous n'êtes pas véhiculés ou pour toutes autres questions.",
            },
            thank: "Nous vous remercions de partager notre bonheur, que ce soit par votre présence ou à travers vos vœux chaleureux, en ce jour si important.",
        },

    ],
    fr: [
        {
            buttonText: "FR", // Texte pour passer au français
            title: {
                save: "Save",
                the: "the",
                date: "date"
            },
            weddingInfo: {
                line1: "For the wedding of",
                line2: {
                    paragraphV: "Vanessa",
                    paragraphEt: "&",
                    paragraphY: "Yann"
                },
                weddingDate: "The 26th of July",
                location: "at Bouc-Bel-Air"
            },
            invitationText: {
                paragraph1: "We have the pleasure to invite you at our wedding, we will first gather at the Bouc-Bel-Air town hall. Following this, we will head to the reception venue at Pavillon d'Aurabelle in Gréoux-Les-Bains.",
                paragraph2: "Additional information will follow soon."
            },
            formReminder: {
                text: "Please remember to fill out the form with your personal information.",
            },
            timer: {
                days: "days",
                hours: "hours",
                loading: "Loading...",
                weddingDay: "WEDDING DAY!",
                weddingEve: "Wedding Eve!",
                thanks: "Thank you for participating in this celebration."
            },
            mapText: {
                mapTitle: "Where to go",
                locationTitle: "Wedding Locations",
                ceremonyLocation: "Mairie de Bouc Bel Air : Rue de l'Hôtel de ville, 13320 Bouc-Bel-Air",
                ceromonyText: "City Hall Registration",
                scheduleCeremonyInfo: "226/07/2025 at 2h30 PM (duration ~30 min)",
                weddingLocaton: "Pavillon d'Aurabelle, 04800 Gréoux-les-Bains",
                weddingLocationText: "Wedding Venue",
                scheduleVenueInfo: "From 26/07/2025 (5pm) to 27/07/2025 (3pm)",
                transportTitle: "Transport Facilities",
                airport: "Marignane International Airport",
                TGV: "Aix-En-Provence TGV Train Station",
                carTitle: "Car rental options",
                carText: "Both the train station and the airport provide a variety of rental options"
            },
            info: {
                titleProgramme: "The Schedule",
                planningLine1: "3:00 PM: Meeting at the town hall",
                planningLine2: "3:40 PM: Departure for Pavillon d'Aurabelle",
                planningLine3: "(approximately 1 hour drive)",
                planningLine4: "4:30 PM: Arrival at the Pavillon",
                planningLine5: "5:30 PM: Franco-Indian ceremony",
                planningLine6: "8:00 PM: Evening celebration begins",
                planningLine7: "9:00 PM: Dinner",
                planningLine8: "(Children can be served earlier)",
                merci: "Please prepare two outfits: one for the ceremonies and one for the evening. No specific colors are required (except for the witnesses).",
                brunch: "The brunch at Pavillon d'Aurabelle as well as accommodation is included and free - (room for 6 people with toilet and bathroom).",
                contact: "Please contact us so we can help you if you don't have transportation or for any other questions.",
            },
            thank: "We thank you for sharing our happiness, whether through your presence or through your warm wishes, on this very important day.",
        },
    ]
};