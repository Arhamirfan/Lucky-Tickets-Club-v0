import React, { useState } from 'react';
import './naav.css'
import {footer} from './menuitem';
import ticket from './ticket.png';

import { menuitem } from './menuitem';
import { td } from './menuitem';

import { Button } from './button';

 


const Naav =()=> {
    const [state, setstate] = useState(false)
    const [navbar, setnavbar] = useState(false)
   const handleclick=()=>
   {
       state?setstate(false):setstate(true)
   }

    return(
        <>
        <div className='naav'>
        <div className='log'><img className='pll' src={ticket}/></div>
<div className='log2'>
<div className='menu-icon' onClick={handleclick}>
               <i className={state? 'fas fa-times':'fas fa-bars' }></i>
            
            </div>
     <ul className={state? 'nav-menu active':'nav-menu ' }>
                {menuitem.map((item,index)=>{
                return(
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                )
                })}
              
            </ul></div>
<div className='log3'> <ul className='nav-menuu' >
                {td.map((item,index)=>{
                return(
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                )
                })}
              
            </ul></div>


   

</div>
                         
                

       
         
  </>
    );
}

export default Naav;