import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createVisitor } from '../../reducers/visitorReducer'

const VisitorForm = () => {
    
    const dispatch = useDispatch()

    const [internal_id, setInternal_id] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [logo, setLogo] = useState('')


    const handleNewVisitor = (e) => {
        e.preventDefault()
        dispatch(createVisitor({internal_id, name, description, logo}))
        setInternal_id('')
        setName('')
        setDescription('')
        setLogo('')
    }

    return (
        <div className='container'>
            <h2>Create a new visitor</h2>
            <form onSubmit={handleNewVisitor}>
                <input type="number" placeholder='internal id' value={internal_id} onChange={(e) => setInternal_id(e.target.value)} />
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="url" placeholder='logo url' value={logo} onChange={(e) => setLogo(e.target.value)}/>
                <div className=''>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )

}

export default VisitorForm