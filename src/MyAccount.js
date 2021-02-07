import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import AccountManager from './compenents_MA/AccountManager';
import MyAccountHeader from './compenents_MA/MyAccountHeader';
import s from './style/MyAccount.module.css';

export default function MyAccount() {
    let history = useHistory();
    useEffect(() => {
        if(localStorage.getItem("token") === null) history.push('/')
    }, [])

    return (
        <div className={s.myAccountContainer}>
            <MyAccountHeader />
            <AccountManager />
        </div>
    )
}
