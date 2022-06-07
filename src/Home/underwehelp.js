import React, { useState } from 'react';
import './underwehelp.css'
import { Button } from './button';
import undercontactimage from './undercontactimage.PNG'
import doc2 from './doctor2.png'
import { Button1 } from './button';
// Detect request animation frame

 

// Call the loop for the first time


// Helper function from: http://stackoverflow.com/a/7557433/274826

 


const Underwehelp =()=> {
    
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
         <div className='undercontactt'>
             <div className="dividet">
                 <div className='contat '>
                        <p className='aboutt'>About us</p>
                        <h1 className='happyt  show-on-scroll'> <strong className='black'>We Provide </strong> High <br/> Solutions <strong className='black'> for Your <br/>Health</strong> </h1>
                         <p className='paint'>The pain itself is a lot of pain Architect:<br/>
                                            no pain. All the pain is just a result of the<br/>
                                             consequences, and they fail to fulfill their obligations.</p>
                      
                    </div>
                       <div className='undercontactimaget'>
                                   <img src={doc2} className='undercontactimageet show-on-scroll'></img>
                       </div>
                  
               </div>
          </div>
  </>
    );
}

export default Underwehelp;