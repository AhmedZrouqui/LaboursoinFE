import React, {useEffect, useState} from 'react'
import s from '../style/AccountManager.module.css'
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom'
import AccountInformations from './AccountInformations'

export default function AccountManager(props) {

    const {isConnected, setIsConnected} = props
    console.log(isConnected, 'accountmanager')

    return (
        <Router>
            <div className={s.accountManagerContainer}>
                <div className={s.navContainer}>
                    <ul>
                        <li>
                            <Link className={s.link}>Mes Informations</Link>
                        </li>
                        <li>
                            <Link className={s.link}>Mes Achats</Link>
                        </li>
                        <li>
                            <Link className={s.link}>Mes Ventes</Link>
                        </li>
                        <li>
                            <Link className={s.link}>Mes Avis</Link>
                        </li>
                    </ul>
                </div>
                <AccountInformations />
            </div>
        </Router>
    )
}
