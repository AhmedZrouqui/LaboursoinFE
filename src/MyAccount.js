import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import AccountManager from './compenents_MA/AccountManager';
import MyAccountHeader from './compenents_MA/MyAccountHeader';
import s from './style/MyAccount.module.css';

export default function MyAccount(props) {
    const {isConnected, setIsConnected} = props
    let history = useHistory();
    useEffect(() => {
        if(!isConnected) history.push('/')
    }, [])

    return (
        <div className={s.myAccountContainer}>
            <MyAccountHeader />
            <AccountManager isConnected = {isConnected}  setIsConnected = {setIsConnected} />
        </div>
    )
}
