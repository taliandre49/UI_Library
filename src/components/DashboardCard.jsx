import React from 'react';
import { useEffect, useState } from "react";
import '../styles/Dashboard.css';
import Dotdot from '../assets/images_dashboard/icon-ellipsis.svg'

function DashBoardCard({background = '', bgColor, cardTitle,  currHours, prevHours, selection})  {
    console.log(typeof background)
    
    return(
        <>
        <div className= "container" style = {{backgroundColor: `${bgColor}`, position: "relative", borderRadius: '1em', borderBottomLeftRadius: '1em', borderBottomRightRadius: '1em'}}>
                <img id = "cardbackground" src = {background}/>
            <div id = "card">
                <p className="titleCap"> {cardTitle}</p>
                <img src = {Dotdot}/>
                <p id = "hrs"> {currHours} hrs</p>
                <p className="prev"> Last {(selection == "weekly" || selection == "monthly") ? selection.split('ly')[0]: "day"} - {prevHours} hrs</p>
            </div>
        </div>
        </>
    )
}

export default DashBoardCard