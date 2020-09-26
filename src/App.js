import React,{ useState, useEffect } from 'react';

import DonationApp from './DonationApp';

import firebaseDB from './firebase/firebase';

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
                <p>loading</p>
            :
                <DonationApp
                expireDate = { new Date(expDate.year,expDate.month,expDate.day) }
                cause = { cause } 
                amount = { amount }
                amountCollected = { amountCollected }
                doners = { doners }
                describe = { describe }
                />
            }
            
        </div>
    )
}

export default App
