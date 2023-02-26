import userServices from '../services/login'
import usersServices from '../services/users'


import { setNotification } from './notifReducer'

export const userLogin = (credentials) => {
    return async dispatch => {
        try {
            const user = await userServices.loginUser(credentials)
            const userDetails = await usersServices.userDetails()
            dispatch({
                    type: "USER_LOGIN",
                    data: userDetails
                })
        } catch(exception) {
            dispatch(setNotification({message:'wrong credentials, please try again', style:'error'}))
        }
    }
}

export const createAccount = (accountObject) => {
    return async dispatch => {
        try {
            const newUser = await usersServices.createAccount(accountObject)
            let user;
            let userDetails
            if (newUser) {
                user = await userServices.loginUser({ username:accountObject.username, password:accountObject.password })
                userDetails = await usersServices.userDetails()
            }
            dispatch({
                type: "USER_CREATE_ACCOUNT",
                data: userDetails
            })
        } catch(exception) {
            dispatch(setNotification({message:'incorrect username or password (min 4 characters), please try again', style:'error'}))
        }
    }
}

export const getUserInfo = () =>{
    return async dispatch => {
        const userDetails = await usersServices.userDetails()
        dispatch({
            type: "GET_USER_INFO",
            data: userDetails
        })
    }
}

export const logoutUser = () => {
    return async dispatch => {
        const user = await userServices.logoutUser()
        dispatch({
            type: "LOGOUT_USER",
            data: null
            })
    }
}


const userReducer = (state=null, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return action.data
        case 'GET_USER_INFO':
            return action.data
        case 'LOGOUT_USER':
            return action.data
        case 'USER_CREATE_ACCOUNT':
            return action.data
        default:
            return state
    }

}

export default userReducer