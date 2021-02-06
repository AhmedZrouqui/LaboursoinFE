import React from 'react';
import s from '../style/AppFooter.module.css';
import navItems from './helpers';
import * as FaIcons from 'react-icons/fa';


const AppFooter = () => {
    

    return (
        <div className={s.appFooterContainer}>
            <div className={s.container}>
                <div className={s.siteInfos}>
                    <h2 className={s.Title}>
                        La Boursoin
                    </h2>
                    
                    <p>
                    Une solution innovante pour acheter et vendre vos kamas en toute sécurité avec une équipe motivée et prête à vous proposer divers services.
                    </p>

                    <button>
                        Acheter Maintenant
                    </button>
                </div>

                <div className={s.nav}>
                    <h3 className={s.Title}>Navigation</h3>
                    <ul>
                        {navItems.map((navItem) => {
                            return (
                                <li><a href={navItem.link}>{navItem.title}</a></li>
                            )
                        })}
                    </ul>
                </div>

                <div className={s.followUs}>
                    <h3 className={s.Title}>Follow-Us</h3>
                    <ul>
                        <li><a href="/"><FaIcons.FaFacebookSquare /></a></li>
                        <li><a href="/"><FaIcons.FaTwitterSquare /></a></li>
                        <li><a href="/"><FaIcons.FaInstagramSquare /></a></li>
                    </ul>
                </div>
            </div>
            <div className={s.copyright}>
                <div className= {s.copyrightText}>
                    <p>Copyright &#169; 2021, La Boursoin, All rights Reserved.</p>
                </div>
                <div className = {s.icons}>
                    <ul>
                        <li>
                            <i><FaIcons.FaPaypal /></i>
                        </li>
                        <li>
                            <i><FaIcons.FaCcMastercard /></i>
                        </li>
                        <li>
                            <i><FaIcons.FaCcVisa /></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppFooter