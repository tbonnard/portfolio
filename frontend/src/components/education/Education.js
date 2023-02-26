import React from "react";

import harvard from '../../files/education/harvard.png'
import freecodecamp from '../../files/education/freecodecamp.png'
import fullstackopen from '../../files/education/fullstackopen.png'
import udemy from '../../files/education/udemy.png'
import structure from '../../files/education/structure.jpg'
import odin from '../../files/education/odin.png'
import cs50python from '../../files/education/cs50python.jpg'

const Education = () => {

    return (
        <div id='formation' className="educationGlobal container">
            <h2 className="titreSection">Formations</h2>
            <div id="timeline">
            <div className="circle" id="endLeft"></div>
            <div className="arrow" id="endRight"></div>
            </div>

            <div className="educationItems">

                <div className="educationItemsTop">
                    <div className="educationItem educationItemTop">
                        <img src={harvard} title='harvard' alt='harvard'/>
                        <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science/" target='_blank'>
                        <div className="middle">
                            <div className="textMiddle">CS50 Harvard</div>
                        </div>
                        </a>
                    </div>

                    <div className="educationItem educationItemTop">
                        <img src={cs50python} title='cs50python' alt='cs50python'/>
                        <a href="https://pll.harvard.edu/course/cs50s-introduction-programming-python?delta=0" target='_blank'>
                        <div className="middle">
                            <div className="textMiddle">CS50 Python</div>
                        </div>
                        </a>
                    </div>


                    <div className="educationItem educationItemTop">
                        <img src={udemy} title='udemy' alt='udemy'/>
                        <a href="https://www.udemy.com/" target='_blank'>
                        <div className="middle">
                            <div className="textMiddle">Udemy Python / JS</div>
                        </div>
                        </a>
                    </div>

                    <div className="educationItem educationItemTop">
                        <img src={structure} title='structure' alt='structure'/>
                        <a href="https://runestone.academy/ns/books/published/pythonds/index.html" target='_blank'>
                        <div className="middle">
                            <div className="textMiddle">Data Structure and Algorithm</div>
                        </div>
                        </a>
                    </div>
                </div>

                <div className="educationItemsBottom">
                    <div className="educationItem educationItemBottom">
                        <img src={freecodecamp} title='freecodecamp' alt='freecodecamp'/>
                        <a href="https://www.freecodecamp.org/learn" target='_blank'>
                        <div className="middle">
                            <div className="textMiddle">FreeCodeCamp</div>
                        </div>
                        </a>
                    </div>

                    <div className="educationItem educationItemBottom">
                        <img src={odin} title='odin' alt='odin'/>
                        <a href="https://www.theodinproject.com/paths/full-stack-javascript" target='_blank'>
                        <div className="middle">
                            <div className="textMiddle">The Odin Project</div>
                        </div> 
                        </a>  
                    </div>

                    <div className="educationItem educationItemBottom">
                        <img src={fullstackopen} title='fullstackopen' alt='fullstackopen'/>
                        <a href="https://fullstackopen.com/en/#course-contents" target='_blank'>
                        <div className="middle">
                            <div className="textMiddle">FullStackOpen Helsinki</div>
                        </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Education

