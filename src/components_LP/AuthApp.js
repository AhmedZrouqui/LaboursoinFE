import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import s from '../style/AuthApp.module.css'
import * as FaIcons from 'react-icons/fa'
import axios from 'axios'

export default function AuthApp({isOpen, setIsOpen, isConnected, setIsConnected}) {
    const endpoint= "http://localhost:8000/graphql"

    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const usernameInputHandler = (e) => {
        setUsernameInput(e.target.value)
    }

    const passwordInputHandler = (e) => {
        setPasswordInput(e.target.value)
    }

    const authButtonHandler = async (e) => {
        const query = `
            mutation
            {
                    tokenAuth(username:"${usernameInput}", password:"${passwordInput}")
                    {
                        errors,
                        token,
                        refreshToken
                    }
            }
        `
        
        const queryResult = await axios.post(
            endpoint,{
                query: query 
            }
            )

        if (queryResult.data.data.tokenAuth.errors === null){
            localStorage.setItem("token", queryResult.data.data.tokenAuth.token)
            localStorage.setItem("refreshToken", queryResult.data.data.tokenAuth.refreshToken)
            setIsConnected(true)
        }

    }

    const submitAuth = (e) => {
        e.preventDefault();
    }

    if(!isOpen || isConnected){
        return null
    }

    return ReactDOM.createPortal(
        <>
            <div className={s.authLayer}  onClick={() => setIsOpen(false)}/>
            <div className={s.authContainer}>
                <i className={s.quiteAuth} onClick={() => setIsOpen(false)}> <FaIcons.FaTimes /> </i>
                <div className={s.container}>
                    <h3>Se Connecter</h3>
                    <div className={s.authForm}>
                        <form onSubmit={submitAuth}>
                            <label >Username</label><br></br>
                            <input type="text" name="username" value={usernameInput} onChange={usernameInputHandler}></input><br></br>
                            <label >Password</label><br></br>
                            <input type="password" name="password" value={passwordInput} onChange={passwordInputHandler}></input><br></br>
                            <a href="/"> Mot de passe Oublié!</a><br></br>
                            <button onClick={authButtonHandler}>Se Connecter</button><br></br>
                            <a href="/" className={s.register}>S'inscrire</a><br></br>
                        </form>
                    </div>
                </div>
            </div>
        </>
        ,
        document.getElementById('portal')
    )
}
