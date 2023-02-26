import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import messageServices from '../../services/contact'
import { setNotification } from '../../reducers/notifReducer'


import github from "../../files/contact/github.png"
import linkedin from "../../files/contact/linkedin.png"


const Contact = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleNewMessage = async (e) => {
        e.preventDefault()
        const object={"name":name, "message":message, "email":email}
        try {
            const result = await messageServices.sendMessage(object)
            if (result.status === 200) {
                setName('')
                setEmail('')
                setMessage('')
                dispatch(setNotification({message:'message envoyé, je vous recontacte rapidement merci!', style:'success'}))
            } else {
                dispatch(setNotification({message:'erreur en envoyant le message', style:'error'}))
            }
        } catch(exception) {
            dispatch(setNotification({message:'erreur Backend en envoyant le message', style:'error'}))
        }

       
    }


        return (
        <div id='contact' className="contactContainerGlobal">
            <div className="contactContainer">      
                <div className="textContact">
                    <h2 className='textContactTitre'>Me contacter</h2>
                    <p>Si vous souhaitez en connaitre d'avantage sur mon pacours, n'hésitez pas à me contacter par l'un des moyens suivants !</p>
                    <div className='textContactIcons'>
                        <a href="https://www.linkedin.com/in/thibaudbonnard/" target="_blank"><img className="icon_contact" src={linkedin} title='LinkedIn' alt='LinkedIn'/></a>
                        <a href="https://github.com/tbonnard" target="_blank"><img className="icon_contact" src={github} title='GitHub' alt='GitHub'/></a>
                    </div>
                </div>

                <div className="formContact">
                    <form onSubmit={handleNewMessage}>
                    <input required type="text" placeholder='Votre nom' value={name} onChange={(e) => setName(e.target.value)} />
                    <input required type="email" placeholder='Votre email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea required rows={5} placeholder='Votre message' value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button className="submit_button">
                            envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>

        )
    }

export default Contact

