import React, {useState, useEffect} from 'react';
import '../styles/ContactForm.css'
import SucessImg from '../assets/imagesContactForm/icon-success-check.svg'

const Success = () =>{



    return(
        <>
        <div className='success'>
            <h3> Message Sent!</h3>
            <p>Thanks for completing the form, we will be in touch soon!</p>
        </div>
        </>
    )
}


export default Success