import React, { useEffect, useState } from "react";
import '../styles/Accordian.css';
// import styles from '../styles/Accordian.module.css';
import Minus from '../assets/images/icon-minus.svg';
import Plus from '../assets/images/icon-plus.svg';


export const AccordianItem = ({
    triggerFunction,
    accordText,
    accordTitle,
    isOpen = false
}) =>{
    const [shown, setShown] = useState(isOpen?'block':'none')
    useEffect(() => {
        isOpen ? setShown('block'): setShown('none')
    }, [isOpen])

    return(
        <div className = "FAQTextItem">
        <div className= "buttontextRow"><h3>{accordTitle}</h3> <img src = { isOpen? Minus: Plus} onClick = {triggerFunction}></img> </div>
        <p className = "faqtextItem" style = {{display: shown}}> {accordText}  </p>
       </div>
    )
}

export default AccordianItem