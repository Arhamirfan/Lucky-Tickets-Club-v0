import React, { useState } from 'react';
import './undercontact.css'
import { Button } from './button';
import undercontactimage from './undercontactimage.PNG'
import { Button1 } from './button';
// Detect request animation frame

 

// Call the loop for the first time


// Helper function from: http://stackoverflow.com/a/7557433/274826

 


const Undercontact =()=> {
    
const elementsToShow = document.getElementsByClassName('show-on-scroll'); 



    window.addEventListener('scroll', function() {
  Array.prototype.forEach.call(elementsToShow,function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
      
    } else {
      element.classList.remove('is-visible');
    }
  });

});
   
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

    return(
        <>
         <div className='undercontact'>
             <div className="divide">
                       <div className='undercontactimage'>
                                   <img src={undercontactimage} className='undercontactimagee show-on-scroll'></img>
                       </div>
                  <div className='conta '>
                        <p className='about'>About us</p>
                        <h1 className='happy  show-on-scroll'>We Are Happy To<br/>Serve You!</h1>
                        <p className='pain'>The pain itself is a lot of pain Architect: no pain.<br/>
                        Everyone is just suffering from the consequences<br/>
                        of the truth, and when they abandon their duties,<br/> 
                        they fall to the ground, but corrupted by it, obtain<br/>the main;will I come to the truth?</p>
                       <div className='bu'>
                           <div >
                           <Button >Contact us </Button>
                           </div>
                            <div >
                           <Button1 children='Read more' />
                            </div>

                       </div>
                    </div>
               </div>
          </div>
  </>
    );
}

export default Undercontact;