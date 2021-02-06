import React from 'react';
import * as FaIcons from "react-icons/fa";
import s from '../style/WhyUs.module.css';




const WhyUs = () => {


    return (
        <div className={s.whyUsContainer}>
            <div className= {s.titleContainer}>
                <h2 className={s.title}>Pourquoi Choisir La Boursoin</h2>
                <p className={s.details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.
                </p>

                <i><FaIcons.FaChevronDown /></i>
            </div>

            <div className={s.container}>
                <div className={s.reason}>
                    <i className={s.reasonIcon}><FaIcons.FaBolt/></i>
                    <h3 className={s.reasonTitle}>Livraison Rapide</h3>

                    <p className={s.reasonDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.
                    </p>
                </div>
                <div className={s.reason}>
                    <i className={s.reasonIcon}><FaIcons.FaShieldAlt/></i>
                    <h3 className={s.reasonTitle}>Paiement Sécurisé</h3>

                    <p className={s.reasonDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.
                    </p>
                </div>
                <div className={s.reason}>
                    <i className={s.reasonIcon}><FaIcons.FaDollarSign /></i>
                    <h3 className={s.reasonTitle}>Prix Imbattable</h3>

                    <p className={s.reasonDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.
                    </p>
                </div>
            </div>
            <div className={s.tray}></div>
        </div>
    )
}

export default WhyUs;