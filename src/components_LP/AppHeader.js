import React, {useState} from 'react';
import s from '../style/AppHeader.module.css';
import beginnerEnu from '../images/enutrofa3riana.png';
import expertEnu from '../images/enutrofa.png';
import Navbar from './Navbar';


const AppHeader = ( {isConnected, setIsConnected} ) => {

    const [beginner, setBeginner] = useState(s.show);
    const [expert, setExpert] = useState(s.hide);

    const characterHandler = (isHover) => {
        
        switch(isHover){
            case true : setBeginner(s.hide);
                        setExpert(s.show);
                        break;
            case false : setBeginner(s.show);
                         setExpert(s.hide);
                         break;
            default : break;
        }
        
    }

    return (
        <div className = {s.headerContainer}>
            
            <div className = {s.infosContainer}>
                <div className= {s.leftSection}>
                    <h1 className={s.bigText}>La<br></br>Boursoin</h1>
                    <p className={s.presentation}>Une solution innovante pour acheter et 
                    vendre vos kamas en toute sécurité avec une équipe motivée et prête à vous proposer 
                    divers services.</p>
                    <button
                    onMouseEnter = {() => characterHandler(true)}
                    onMouseLeave = {() => characterHandler(false)}
                    >
                        Acheter Des Kamas
                    </button>
                </div>
                <div className = {s.rightSection}>
                    <img src={beginnerEnu} name="beginner" alt="beginner" className={beginner}></img>
                    <img src={expertEnu} name ="expert" alt="expert" className={expert}></img>
                </div>
            </div>
            <div className={s.scrollContainer}>
                <div className={s.scrollShape}><h3>
                    scroll</h3></div>
            </div>
        </div>
    ) 
}

export default AppHeader;