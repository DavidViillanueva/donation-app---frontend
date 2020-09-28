
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en:{
                translation: {
                    "daysLeft": 'Only {{ days }} day left to fund this project!',
                    "doners": "Join the {{ counterDoners }} other doners who have already support this project. Every dolar helps!",
                    "why": `Why give $ {{ amount }}?`,
                    "balloon": `$ {{ restantAmount }} still needed for this project!`,
                    "buttons": {
                        "giveNow": "Give Now!",
                        "share": "Tell your Friends",
                        "copied": "Copied",
                        "toPage": "Go to the site!"
                    }
                }
            },
            es:{
                translation: {
                    "daysLeft": 'Solo quedan {{ days }} dias para apoyar este proyecto!',
                    "doners": 'Unete a las personas que ya han apoyado esta causa( {{ counterDoners }} ). Cada centavo cuenta!',
                    "why": `Porque donar $ {{ amount }}?`,
                    "balloon": `Aun faltan $ {{ restantAmount }} para este proyecto!`,
                    "buttons": {
                        "giveNow": 'Donar!',
                        "share": 'Compartir',
                        "copied": 'Copiado',
                        "toPage": 'Ir al sitio'
                    }
                }
            }
        },
        lng: 'es',
        fallbackLng: 'es',
        interpolation:{
            escapeValue:false
        }
    });
