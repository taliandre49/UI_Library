import React, { useEffect, useState }  from "react";
import '../styles/HamburgerMenu.css'

const HamburgerMenu = ({Links}) =>{
    const [isOpen, setIsopen] = useState(false)
   
    const [animate, setAnimate] = useState(false)

    function handleNav(url){
        console.log(url)
        // add logic to handle URL
        // OR update p tags bellow to a hrefs to navigate
        // Do this once you have valid urls sent in
    }

    
    return(
        <> 
        <div className = "containerHB">
        <div className = {isOpen? 'active HBMenu' : 'HBMenu'} onClick={() => setIsopen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
       
        {isOpen && <div className = "links" >
            {
                Links.map(({title, url}) =>
                
                    <p key = {title} aria-label = {`Navigation link to ${title} page`} onClick = {() => handleNav(url)}>{title}</p>
                )


            }

        </div>} 
        </div>
      
        </>
    )

}
export default HamburgerMenu