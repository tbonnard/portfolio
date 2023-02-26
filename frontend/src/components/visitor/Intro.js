import React, { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom"


import {getVisitor} from "../../reducers/visitorReducer"
import IntroGeneral from "./IntroGeneral"


const Intro = () => {
    const dispatch = useDispatch()

    const location = useLocation()
    const history = useHistory()

    const [param, setParam] = useState('')
    const [paramLocal, setParamLocal] = useState('')

    const visitor = useSelector(state => state.visitor)

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        setParam(params.get("visitor"))
        if (window.localStorage.getItem('visitorPortfolioId')) {
            setParamLocal(window.localStorage.getItem('visitorPortfolioId').replace('"', '').replace('"', ''))}
    }, [location.search])

    useEffect(() => {
        if (param) {
            window.localStorage.setItem('visitorPortfolioId', JSON.stringify(param))
            setParamLocal(param)
        }
        history.push("/")
    }, [history, param])


    useEffect(() => {
        dispatch(getVisitor(paramLocal))
    }, [dispatch, paramLocal])


    if (!visitor) {
        return (
            <div id='home'  className="IntroDiv">
            <h1>Bonjour</h1>
            <div className="introText">
                <IntroGeneral />
            </div>

        </div>
        )
    }

    return (
        <div id='home' className="IntroDiv">
            <div className="nameDivVisitor">
                <h1>Bonjour {visitor.name}</h1>
                <img className="logoVisitor" src={visitor.logo} />
            </div>
            <div className="introText">
                <IntroGeneral />
                <p>{visitor.description}</p>
            </div>
        </div>

    )
}

export default Intro

