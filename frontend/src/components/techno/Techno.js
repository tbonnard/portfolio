import React from "react";

import js from '../../files/techno/js.png'
import python from '../../files/techno/python.png'
import react from '../../files/techno/react.png'
import html_css from '../../files/techno/html_css.png'
import git from '../../files/techno/git.png'
import django from '../../files/techno/django.png'
import rest from '../../files/techno/rest.png'
import node from '../../files/techno/node.png'
import db from '../../files/techno/db.png'


const Techno = () => {

    return (
        <div id='techno' className="container">
                <h2 className="titreSection">Technos</h2>
                <div className="technoItems">
                    <img className="technoItem" src={js} alt='JavaScript' title='JavaScript' style={{backgroundColor: "#3f3958"}}/>
                    <img className="technoItem" src={react} alt='React' title='React' style={{backgroundColor: "#f9c5aa"}}/>
                    <img className="technoItem" src={python} alt='Python' title='Python'/>
                    <img className="technoItem" src={html_css} alt='HTLM_CSS' title='HTLM CSS' style={{backgroundColor: "#fbe6e9"}}/>
                    <img className="technoItem" src={django} alt='Django Framework' title='Django Framework' style={{backgroundColor: "#47a5e6"}}/>
                    <img className="technoItem" src={rest} alt='Rest API' title='Rest API' style={{backgroundColor: "#f9c5aa"}}/>
                    <img className="technoItem" src={db} alt='SQL MongoDb' title='SQL MongdoDb' style={{backgroundColor: "#47a5e6"}}/>
                    <img className="technoItem" src={node} alt='nodeJS' title='nodeJS' style={{backgroundColor: "#282b23"}}/>
                    <img className="technoItem" src={git} alt='git' title='git' style={{backgroundColor: "#3973e7"}}/>
                </div>
        </div>

    )
}

export default Techno
