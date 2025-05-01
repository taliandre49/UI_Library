import { act, useEffect, useState } from 'react'
// import '../src/styles/Accordion.css';
import '../src/styles/Accordion.css';
// import {
//     Background,
//     Minus,
//     Plus,
//     Star
//   } from '../src/assets/images'
import Minus from './assets/images/icon-minus.svg';
import Plus from './assets/images/icon-plus.svg';
import Star from './assets/images/icon-star.svg';
import AccordionItem from './components/AccordionItems';
import Background from './components/Background';
// import styles from '../src/styles/Accordion.module.css';



function Accordion() {
    const [activeFAQ, setActiveFAQ] = useState([]);

    
    const handleClick = (value)=>{

        setActiveFAQ(activeFAQ.includes(value)? activeFAQ.filter(x => x!==value): [...activeFAQ,value])
        // setOpenFAQ(openFAQ === value? null: value)
    }
    // console.log(openFAQ);
    console.log(activeFAQ);


  return (
            
    <>
    <Background/>
     <div className= "card centerbody"> 
        <div className= "starFAQ"> <img src = {Star} alt= ""/><h1>FAQs</h1></div>
        <AccordionItem
            triggerFunction = {() => handleClick("1")}
            accordText= {`Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It s suitable for 
            all levels and ideal for portfolio building `}
            accordTitle={"What is Frontend Mentor, and how will it help me?"}
            isOpen = {activeFAQ.includes("1")}
        >

        </AccordionItem>
        <AccordionItem
            triggerFunction = {() => handleClick("2")}
            accordText= {`Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`}
            accordTitle={"Is Frontend Mentor free?"}
            isOpen = {activeFAQ.includes("2")}
        >
        </AccordionItem>
        <AccordionItem
            triggerFunction = {() => handleClick("3")}
            accordText= { `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`}
            accordTitle={"Can I use Frontend Mentor projects in my portfolio?"}
            isOpen = {activeFAQ.includes("3")}
        >
        </AccordionItem>
        <AccordionItem
            triggerFunction = {() => handleClick("4")}
            accordText= { `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members`}
            accordTitle={"How can I get help if I'm stuck on a challenge?"}
            isOpen = {activeFAQ.includes("4")}
        >
        </AccordionItem>
       </div>
       </>
  )
}

export default Accordion;