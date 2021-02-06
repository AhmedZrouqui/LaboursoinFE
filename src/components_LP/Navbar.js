import React, {useState} from 'react';
import s from '../style/Navbar.module.css';
import '../style/Navbar.module.css';
import navItems from './helpers.js';
import * as BiIcons from 'react-icons/bi'
import AuthApp from './AuthApp';



const Navbar = ({isConnected, setIsConnected}) => {

    const is_online = <li><a href="#">Mon Compte</a></li>;
    const is_offline = <li><a href="#" onClick = {() => setIsOpen(true)}>S'identifier</a></li>;
    const [isOpen, setIsOpen] = useState(false)

    const hamMenuHandler = (state) => {
        const hamMenu = document.getElementsByName("hamMenu");

        if(state){
            hamMenu[0].classList.add(s.openHam);
        }
        else{
            hamMenu[0].classList.remove(s.openHam);
        }
    }


    return (
        <>
            <div className = {s.navContainer}>
                <div className={s.container}>
                    <div className = {s.logo}>
                        <p className= {s.logoText}>Boursoin</p>
                    </div>

                    <div className={s.nav}>
                        <ul>
                            {navItems.map((navItem) => {
                                return (
                                    <li><a href={navItem.link}>{navItem.title}</a></li>
                                )
                            })}
                            {isConnected?is_online:is_offline}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={s.hamburgerMenu}>
                <div className = {s.logo}>
                    <p className= {s.logoText}>Boursoin</p>
                </div>

                <div>
                    <a onClick={() => hamMenuHandler(true)} className={s.open}>
                    <BiIcons.BiMenuAltRight />
                    </a>
                    <div name="hamMenu" className={s.hamNav}>
                        <div>
                            <a onClick={() => hamMenuHandler(false)} className={s.close}>
                                <BiIcons.BiRightArrowAlt />
                            </a>
                            <ul>
                                {navItems.map((navItem) => {
                                    return (
                                        <li><a href={navItem.link}>{navItem.title}</a></li>
                                    )
                                })}
                                {isConnected?is_online:is_offline}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <AuthApp isOpen={isOpen} setIsOpen = {setIsOpen} isConnected = {isConnected}  setIsConnected = {setIsConnected} />
        </>
    )
}

export default Navbar;