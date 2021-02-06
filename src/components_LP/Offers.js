import React from 'react';
import s from '../style/Offers.module.css'



const Offers = () =>{

    return(
        <div className={s.offersContainer}>
            <div className={s.offers}>
                <h3 className={s.offersTitle}>Decouvrez Dès<br></br>Maintenant Nos<br></br>Offres</h3>
            </div>

            <div className = {s.offerButtons}>
                <button className = {s.puButton}>Acheter des Kamas</button>
                <button className = {s.saButton}>Vendre Des Kamas</button>
            </div>
        </div>
    )

}

export default Offers;