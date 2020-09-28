import React,{ useState, useEffect } from 'react';

import DonationApp from './DonationApp';
import LanguageSelector from './components/languageSelector/LanguageSelector';

import firebaseDB from './firebase/firebase';

import './config/i18n-config';
import Loader from './components/materialComponents/Loader';



const App = () => {
    const [ state, setState] = useState({
        loading:true,
        data: {
            amount: 0,
            cause: '',
            amountCollected: 0,
            doners: 0,
            describe: '',
            expDate: {
                day: 1,
                month: 1,
                year: 1
            }
        }
    });

    const [lang, setLang] = useState('en');

    useEffect(()=>{
        firebaseDB.database().ref('/donation/').once('value', ( snap ) =>{
            setState({
                loading: false,
                data: snap.val()
            });
        })
    },[])
    
    
    const { data } = state;
    const { amount, amountCollected, cause, doners, describe, expDate } = data;


    return (
        <div>
            {state.loading ?
                <Loader active={ state.loading }/> 
            :
                <DonationApp
                expireDate = { new Date(expDate.year,expDate.month,expDate.day) }
                cause = { cause } 
                amount = { amount }
                amountCollected = { amountCollected }
                doners = { doners }
                describe = { describe }
                lang= {lang}
                />
            }
            
            <LanguageSelector set={ (x) => setLang(x) } />
        </div>
    )
}

export default App
