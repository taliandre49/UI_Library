import React, { useEffect, useState} from 'react';
import require from 'react';
import '../styles/Carousel.css'

const Carousel = ({images}) => {
    const [index, setIndex] = useState(0);
    console.log(index);
    

    function Onprev(){
        (index == 0) ? setIndex(images.length-1): setIndex(index-1);
    }

    function OnNext(){
        (index == images.length-1) ? setIndex(0): setIndex(index+1);
    }
    
    return(
        <> 
        {/* <h1> CAR CAROUSEL</h1> */}
        
        <section aria-label ="imageCarousel" className='container'>
            <div className = "images" style = {{width: '100%', height: '100%', display: 'flex', overflow:'hidden'}}>
                {images.map(({url, alt},i) =>
                     <img key = {url} src={url} alt = {alt} aria-hidden = {index != i} className='imagebox' style = {{translate: `${-100 * index}%`}}/>
                )}
            </div>
           
            <div className ="buts">
                <button onClick ={Onprev} className='butL' aria-label='View Previous Image'>&larr;</button>
                <button onClick={OnNext} className='butR' aria-label='View Next Image'>&rarr;</button>
            </div>

            <div id = "dots">
                {images.map(((_, i)=> 
                    <button aria-label = {`View Image ${i+1}`} onClick = {()=> setIndex (i)} key = {i} style = {i === index ? {border: '.1em solid white', scale: '1.2'} : {}} className={i === index ? 'selected': ''}>  </button>
                ))}
            </div>
            
        </section>
            
       
        </>
    )
}

export default Carousel