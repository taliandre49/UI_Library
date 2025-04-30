import React from "react";
import BackgroundDesk from '../assets/images/background-pattern-desktop.svg';
import BackgroundMobile from '../assets/images/background-pattern-desktop.svg';
import { useState, useEffect } from "react";
// import styles from '../styles/Accordian.module.css';
import '../styles/Accordian.css'


export const Background = () => {
    // default to laptop screen
    const GetWindowSize = () =>{

        const [screenWidth, setscreenWidth] = useState('1400')

        useEffect(() => {

            const handleResize = () => {
                setscreenWidth(window.innerWidth)
            }

            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }, [])
        return screenWidth
    }


    const size = GetWindowSize()
    return(
        <>
        <div style = {{dipslay: size > '500'? 'block': 'none'}} className="backgroundHeader">
            <img src= {BackgroundDesk} alt="Desktop Background Header" />
        </div>
        <div style = {{dipslay: size <= '500'? 'block': 'none'}} className= "backgroundHeader">
            <img src= {BackgroundMobile} alt="Mobile Background Header"/>
        </div>
        </>
    )

}


export default Background

