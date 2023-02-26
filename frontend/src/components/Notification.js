import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
    
    const message = useSelector(state => state.notif)

    if (!message) {
        return null
    }
    return (
        <div className='notifGlobal' style={{backgroundColor: message.style}}>
        <p className={message.style}>
            {message.message}
        </p>
        </div>
    )
}

export default Notification