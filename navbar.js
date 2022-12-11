import Link from 'next/link'
import styles from "../styles/Navbar.module.css"
import { useEffect, useState } from 'react'

export default function Navbar(){
    useEffect(()=>{
        function startNavbar(){
            const navbarContent = document.getElementById("navbar")
            const more = document.getElementById("more")

            navbarContent.style.display = "none"
            more.addEventListener('click', ()=>{
                if(navbarContent.style.display == "none"){
                    navbarContent.style.display = "inline-flex"
                    more.className = "fa-solid fa-x fa-2x"
                }else{
                    navbarContent.style.display = "none"
                    more.className = "fa-solid fa-bars fa-2x"

                }
            })
        }
        startNavbar()
    }, [])

    return(
        <> 
            <nav className={styles.nav}>
                <i className="fa-solid fa-bars fa-2x" id="more"/>
                <div className={styles.navbox} id="navbar">  
                    <a><Link href="/">Adição</Link></a> 
                </div>
            </nav>
        </>
    )
}