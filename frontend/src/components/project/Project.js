import React from "react";

import association from '../../files/project/association.png'
import gif from '../../files/project/gif.png'
import ecom from '../../files/project/ecom.png'
import admin_inventory from '../../files/project/admin_inventory.png'
import projapp from '../../files/project/projapp.png'

import js from '../../files/techno/js.png'
import python from '../../files/techno/python.png'
import react from '../../files/techno/react.png'
import html_css from '../../files/techno/html_css.png'
import git from '../../files/techno/git.png'
import django from '../../files/techno/django.png'
import rest from '../../files/techno/rest.png'
import node from '../../files/techno/node.png'
import db from '../../files/techno/db.png'
import github from '../../files/techno/github.png'
import flask from '../../files/techno/flask.png'


const Project = () => {
    
    return (
        <div id='portfolio' className="container">
            <h2 className="titreSection">Projets</h2>
            <div className="projectGlobal">
                <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#eaf7f6"}}>
                        <a href="https://projapp.onrender.com/" target="_blank">
                        <img src={projapp} alt='projapp' title='projapp'/>
                        <div className="middle">
                            <div className="textMiddle">Outils de suivi de projets (to do, notes, daily, meetings) et création de profils (ex, pour freelancers)</div>
                        </div>
                        </a>
                    </div>
                    <div className="projectItemBottom">
                        <p>Suivi de gestion de projets</p>
                        <div className="tech_icons">
                            <img src={js} alt="js" title="js"/>
                            <img src={react} alt="ReactJS" title="ReactJS"/>
                            <img src={node} alt="Node.js" title="Node.js"/>
                            <a href="https://github.com/tbonnard/projapp" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
            
                    </div>
            </div>

            <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#c7e9fd"}}>
                        <a href="https://playgif.onrender.com/" target="_blank">
                        <img src={gif} alt='gif' title='gif'/>
                        <div className="middle">
                            <div className="textMiddle">Application permettant de voter pour les meilleurs gifs et de se créer un "hall of fame" de gif</div>
                        </div>
                        </a>
                    </div>
                    <div className="projectItemBottom">
                        <p>Gif Fame</p>
                        <div className="tech_icons">
                            <img src={js} alt="js" title="js"/>
                            <img src={react} alt="ReactJS" title="ReactJS"/>
                            <img src={node} alt="Node.js" title="Node.js"/>
                            <a href="https://github.com/tbonnard/gif_vote" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
            </div>

            <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#f7f7f7"}}>
                        <a href="https://association.pythonanywhere.com/" target="_blank">
                        <img src={association} alt='ecom' title='ecom'/>
                        <div className="middle">
                            <div className="textMiddle">Gestion des bénévoles, des présences et des communications entre l'association et les bénévoles</div>
                        </div>
                        </a>
                    </div>
                    <div className="projectItemBottom">
                        <p>Gestion associative</p>
                        <div className="tech_icons">
                            <img src={python} alt="python" title="python"/>
                            <img src={django} alt="django" title="django"/>
                            <img src={js} alt="js" title="js"/>
                            <a href="https://github.com/tbonnard/association_benevoles" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
            </div>

            <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#fe436e"}}>
                        <a href="https://ecomplatform.pythonanywhere.com"  target="_blank">
                        <img src={ecom} alt='association' title='association'/>
                        <div className="middle">
                            <div className="textMiddle">e-com listant les produits de sa plateforme Admin et intégrer à StripeAPI pour le paiement</div>
                        </div>
                        </a>
                    </div>
                    <div className="projectItemBottom">
                        <p>e-commerce</p>
                        <div className="tech_icons">
                            <img src={python} alt="python" title="python"/>
                            <img src={flask} alt="flask" title="flask"/>
                            <img src={js} alt="js" title="js"/>
                            <a href="https://github.com/tbonnard/ecom_and_admin_inventory" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
            </div>

            <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#3f87bd"}}>
                        <a href="https://ecomplatform.pythonanywhere.com/admin" target="_blank">
                        <img src={admin_inventory} alt='admin_inventory' title='admin_inventory'/>
                        <div className="middle">
                            <div className="textMiddle">Plateforme Admin du site e-com permettant de gérer les produits, les achats et les transactions</div>
                        </div>
                        </a>
                    </div>
                    <div className="projectItemBottom">
                        <p>Admin inventaire</p>
                        <div className="tech_icons">
                            <img src={python} alt="python" title="python"/>
                            <img src={flask} alt="flask" title="flask"/>
                            <img src={js} alt="js" title="js"/>
                            <a href="https://github.com/tbonnard/ecom_and_admin_inventory" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
            </div>
           </div>
        </div>
    )
}

export default Project
