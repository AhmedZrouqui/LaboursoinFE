import React, {useEffect, useState} from 'react';
import * as FaIcons from "react-icons/fa";
import s from '../style/WhatTheySay.module.css';
import axios from 'axios';

const endpoint = "http://localhost:8000/graphql"
const notesQuery = `
                {
                    users{
                        edges{
                        node{
                            noteSet{
                                id
                                note
                                createdAt
                            }
                            username
                        }
                        }
                    }
                    }
                `



const WhatTheySay = () => {

    const [notes, setNotes] = useState([])

    useEffect( () => {
        async function fetchData(){

            const queryResult = await axios.post(
                endpoint,
                {
                    query: notesQuery,
                    headers: {
                        'Access-Control-Allow-Origin':'*'
                    }
                }
            )
            const result = queryResult.data.data.users.edges;
            if(result.length>0){
                await result.map((edge,index) => {
                    const node = edge.node
                    node.noteSet.map(note => {
                        const exists = notes.filter(_note => _note.id === note.id)
                        if(exists.length===0){
                            const newNote = 
                            {
                                'id': note.id,
                                'note' : note.note,
                                'username' : node.username,
                                'date':note.createdAt
                                
                            }
                            setNotes(notes => [...notes, newNote])                  
                        }
                    })
                })
            }
        }
        fetchData();
    }, [])

    

    return(
        <div className={s.whatTheySayContainer}>
            <div className={s.tray}></div>
            <div className= {s.titleContainer}>
                <h2 className={s.title}>Nos Clients disent...</h2>
                <p className={s.details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.
                </p>

                <i><FaIcons.FaChevronDown /></i>

            </div>
            <div className={s.noteContainer}>
            {
                notes.map((note) => {
                    return(
                        <div className={s.note} key={note.id}>
                            <div className={s.noteInfo}>
                                <p className={s.usernameDisplay}>Par <span>{note.username}</span></p>
                                <p className={s.dateDisplay}>le {note.date}</p>
                            </div>
                            <div className={s.trayNote}></div>
                            <div className = {s.noteText}>
                                <p> &ldquo; {note.note} &rdquo;</p>
                            </div>                       
                         </div>
                    )
                })
            }
            </div>

        </div>
    )
}

export default WhatTheySay;