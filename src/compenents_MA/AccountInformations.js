import React, {useEffect} from 'react';
import s from '../style/AccountInformations.module.css';
import axios from 'axios';
import utils from '../utils';

export default function AccountInformations() {

    useEffect(async () => {
        function verifyTokenExists(){
            if(localStorage.getItem("token") !== null){
                return true;
            }
            else {
                return false;
            }
        }

        async function getUserInformations(){
            if(verifyTokenExists()){
                axios.defaults.headers.post['Authorization'] = "JWT "+localStorage.getItem("token")
                const requestresult = await axios.post(
                    utils.endpoint,
                    {query:utils.meQuery}
                )

                console.log(requestresult.data.data)
            }
        }

        await getUserInformations();

    }, [])


    const onSubmitHandler = (e) => {
        e.preventDefault(); 
    }

    
    return (
        <div className={s.accountInformationsContainer}>
            <div className={s.infosHeader}>
                <h2>Mon Compte : Informations</h2>
            </div>

            <div className={s.userInformationsContainer}>
                <form onSubmit={() => onSubmitHandler}>
                    <label>
                        First Name
                    </label>
                    <input type = "text"></input><br></br>
                    <label>
                        Last Name
                    </label>
                    <input type = "text"></input><br></br>
                    <label>
                        Username
                    </label>
                    <input type = "text"></input><br></br>
                    <label>
                        Email
                    </label>
                    <input type = "text"></input><br></br>
                    <label>
                        Password
                    </label>
                    <input type = "Password"></input><br></br>
                    <button>Modifier</button>
                </form>
            </div>
        </div>
    )
}
