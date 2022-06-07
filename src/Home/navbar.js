import React, { useState } from 'react';
import { menuitem } from './menuitem';
import ticket from './ticket.png'
import './Digi Hastany.png'
import {Button} from './button.js';
const Navbar=()=> {
    const [state, setstate] = useState(false)
    const [navbar, setnavbar] = useState(false)
   const handleclick=()=>
   {
       state?setstate(false):setstate(true)
   }
 const changebackgound=()=>
 {
    var clientWidth = document.documentElement.clientWidth;
    console.log(clientWidth);
     if(window.scrollY>=50)
     {
         setnavbar(true)
         
         if(clientWidth> 1273){
            
            var e = document.getElementsByClassName("nvv");
            for (var i = 0; i < e.length; i++) {
                e[i].style.marginLeft="300px";
                e[i].style.color="white";
            }
            var e = document.getElementsByClassName("nav-link");
            for (var i = 0; i < e.length; i++) {
                e[i].style.color="while";
            }
            var e = document.getElementsByClassName("fa-discord");
            for (var i = 0; i < e.length; i++) {
                e[i].style.marginLeft="500px";
            }
        var elements = document.getElementsByClassName("nav-menu");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width="70vw";
    }
               }
               
                else
               {
                var e = document.getElementsByClassName("nvv");
                for (var i = 0; i < e.length; i++) {
                    e[i].style.color="black";
                    e[i].style.marginLeft="0";
                }
                var e = document.getElementsByClassName("nav-link");
                for (var i = 0; i < e.length; i++) {
                    e[i].style.color="black";
                }
                var e = document.getElementsByClassName("fa-discord");
                for (var i = 0; i < e.length; i++) {
                    e[i].style.marginLeft="0px";
                }
                       var elements = document.getElementsByClassName("nav-menu");
                       for (var i = 0; i < elements.length; i++) {
                       elements[i].style.width="100%";
                       }
   
               }




     }




     else
     {
     
         setnavbar(false)
         if(clientWidth> 1273){
            var e = document.getElementsByClassName("nvv");
            for (var i = 0; i < e.length; i++) {
                e[i].style.marginLeft="200px";
                e[i].style.color="white";
            }
            var e = document.getElementsByClassName("nav-link");
            for (var i = 0; i < e.length; i++) {
                e[i].style.color="while";
            }
            var e = document.getElementsByClassName("fa-discord");
            for (var i = 0; i < e.length; i++) {
                e[i].style.marginLeft="150px";
            }
            var elements = document.getElementsByClassName("nav-menu");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.width="40vw";
            }
         }
         else
         {
            var e = document.getElementsByClassName("nav-link");
            for (var i = 0; i < e.length; i++) {
                e[i].style.color="black";
                
                e[i].style.marginLeft="0";
            }
            var e = document.getElementsByClassName("nvv");
            for (var i = 0; i < e.length; i++) {
                e[i].style.color="black";
            }
            var e = document.getElementsByClassName("fa-discord");
            for (var i = 0; i < e.length; i++) {
                e[i].style.marginLeft="0px";
            }
                    var elements = document.getElementsByClassName("nav-menu ");
                    for (var i = 0; i < elements.length; i++) {
                      elements[i].style.width="100%";
                     }
                   
         }
     }
 }
 window.addEventListener('scroll',changebackgound);
 window.addEventListener('resize', changebackgound);
    return (
        <>
        <nav className={navbar? 'NavbarItems-active':'NavbarItems' }>
            <h1 className='navbar-logo'>  <img className='pll' src={ticket}/></h1>
            <div className='menu-icon' onClick={handleclick}>
               <i className={state? 'fas fa-times':'fas fa-bars' }></i>
            
            </div>
            <ul className={state? 'nav-menu active':'nav-menu ' }>
                {menuitem.map((item,index)=>{
                return(
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                )
                })}
              
            </ul>


        </nav>

         </>
    );



}

export default Navbar;