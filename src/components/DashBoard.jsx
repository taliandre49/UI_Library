import React, {useEffect, useState} from 'react';
import '../styles/Dashboard.css'
import DataDash from '../data/dataDashboard.json';
import DashBoardCard from '../components/DashboardCard';
import Work from '../assets/images_dashboard/icon-work.svg';
import Play from '../assets/images_dashboard/icon-play.svg';
import Study from '../assets/images_dashboard/icon-study.svg';
import Exercise from '../assets/images_dashboard/icon-exercise.svg';
import Social from '../assets/images_dashboard/icon-social.svg';
import SelfCare from '../assets/images_dashboard/icon-self-care.svg';
import HeadShot from '../assets/images_dashboard/image-jeremy.png';

const DashBoard = () => {
    const [selection, setSelection] = useState('weekly')

    function handleSelection(e){
        e.preventDefault()
        const {id} = e.target
        if (["weekly", "monthly", "daily"].includes(id)){
            setSelection(id)
        }
       
    }

    const imgMap = {
        'Work' : Work,
        'Play' : Play,
        'Study': Study,
        "Social" : Social,
        'Exercise' : Exercise,
        'Self Care': SelfCare
    }
    const imgBack = {
        'Work' : 'hsl(15, 100%, 70%)',
        'Play' : 'hsl(195, 74%, 62%)',
        'Study': 'hsl(348, 100%, 68%)',
        "Social" : 'hsl(264, 64%, 52%)',
        'Exercise' : 'hsl(145, 58%, 55%)',
        'Self Care': 'hsl(43, 84%, 65%)'
    }
    // const imgMap = {
    //     'Work' : '../assets/images_dashboard/icon-work.svg',
    //     'Play' : '../assets/images_dashboard/icon-play.svg',
    //     'Study': '../assets/images_dashboard/icon-study.svg',
    //     "Social" : '../assets/images_dashboard/icon-social.svg',
    //     'Exercise' : '../assets/images_dashboard/icon-exercise.svg',
    //     'Self Care': '../assets/images_dashboard/icon-self-care.svg'
    // }
    console.log('img map test', imgMap['Work'].toString())

    return(
        <>
        <div className='container'>
        <div className = "rowalign">
        <div className = "columAlign DMWProf">
        <div className='profileCard'>
            <div id = "profContent">
            <img src ={HeadShot}/>
            <p> Report for</p>
            <p className = "Name"> Jeremy </p>
            <p className = "Name move"> Robinson </p>
            </div>
        </div>
        <div id = "DWM" onClick = {(e) => handleSelection(e)}>
            <p name = "daily" value = "daily" id = "daily" className = {selection == 'daily'? 'selected': ''}>Daily</p>
            <p name = "weekly" value = "weekly" id = "weekly"  className = {selection == 'weekly'? 'selected': ''} >Weekly</p>
            <p name = "monthly" value = "monthly" id = "monthly"  className = {selection == 'monthly'? 'selected': ''}>Monthly</p>
        </div>
        </div>
        <div id = "cards">
            {Object.values(DataDash).map((value) => (
                <DashBoardCard
                bgColor = {imgBack[value.title]}
                background={ imgMap[value.title]}
                key = {value.title + Math.random()} cardTitle={value.title} currHours={value.timeframes[selection].current} prevHours={value.timeframes[selection].previous} selection={selection} ></DashBoardCard>
            ))}
        </div>
        </div>
        </div>
        </>
    )
}

export default DashBoard;