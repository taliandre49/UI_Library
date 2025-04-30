import React, {useEffect, useState} from 'react'
import '../styles/ContactForm.css';
import Success from './SuccessSubmit';

function ContacthtmlForm({onSuccess}) {
    // const [fName, setFName] = useState('');
    // const [lName, setLName] = useState('');
    // const [email, setEmail] = useState('');
    // const [queryType, setQueryType] = useState(null);
    // const [messgae, setMesage] = useState('');
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false
      });
    const [valid, setValid] = useState(false)
    const [errors, setErrors] = useState({})
  
    
      

    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((prev) =>({
            ...prev,
            [name]: type === 'radio' ? (checked ? value : prev[name]) : value
        })
        )
    }

    const validateEmail = (email) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // setEmailError('Invalid email address');
        return false;
        }
        // setEmailError('');
        return true;
        };
    
    async function validateForm() {
        let formErrors = {}
        if(formData.fName === "") formErrors.fName = "This field is required";
        if(formData.lName === "") formErrors.lName = "This field is required";
        if(!validateEmail(formData.email)) formErrors.email = "  Please enter a valid email address";
        if(formData.email === "") formErrors.email = "This field is required";
        if(formData.message === "") formErrors.message = "This field is required";
        if(formData.consent.toString() === "false" ) formErrors.consent = "To submit this form, please consent to being contacted";
        if(formData.queryType === "") formErrors.queryType = " Please select a query type";
        console.log(formData.consent, formData.consent.toString(), formData.consent.toString, formErrors.consent)
        await setErrors(formErrors)
        return Object.keys(formErrors).length === 0;
       
    }
    
    async function handleSubmit(e)  {
        e.preventDefault(); 
        console.log("Sumbitted!!!")
        console.log(formData)
        console.log(e)
        let validation = await validateForm()
        setValid(validation)  
        if (validation) onSuccess();
    }
 
    


    
    return(
        <>
        <form onChange={(e) => handleChange(e)} onSubmit={handleSubmit} className = "formCard">
            <h2> Contact Us</h2>
            <div className = "inputRows">
                <div className='LFName'><label htmlFor="fName">First Name:</label><input type="text" name = "fName" className = {errors.fName? 'ErrorInput': ''}/> {errors.fName && <p className='Error'>  {errors.fName}</p>}</div>
                <div className = 'LFName lastfexend'><label htmlFor="lName">Last Name:</label><input type="text" name = "lName" className = {errors.lName? 'ErrorInput': ''}/> {errors.lName && <p className='Error'>  {errors.lName}</p>}</div>
            </div>
            <label htmlFor="email">Email Address:</label><input type="text" name = "email" className = {errors.email? 'ErrorInput': ''}/> { errors.email && <p className='Error'> {errors.email} </p>}
            <label htmlFor="queryType">Query Type:</label>
            <div className = "inputRows">
                <div className='radio'>
                    <label htmlFor="general"> 
                    <input type="radio" id="general" name="queryType" value="general"/> 
                      General Enquiry</label>
                </div>
          
                <div className='radio lastfexend'>
                    <label htmlFor="support">
                    <input type="radio" id="support" name="queryType" value="support"/>
                     Support Request</label>
                </div>
            </div>
               {errors.queryType &&  <p className='Error'> {errors.queryType} </p>}
            <label htmlFor="message">Message</label><textarea name="message" id="message" className = {errors.message? 'ErrorInput': ''}></textarea>{ errors.message && <p className='Error'> {errors.message}</p>}
            <div className='inputRows'><input id = "checkbox" type="checkbox" name = "consent" value = {true}/><label htmlFor="checkBox" style = {{marginTop: .3+ 'em', marginLeft: .5 + 'em'}}>  I consent to being contacted by the team</label> </div> {errors.consent && <p className='Error'> {errors.consent} </p>}
            <input type="submit" value = "Submit" className='submit' name = "Submit" />
        </form>
            

        </>
    )
}


export default ContacthtmlForm