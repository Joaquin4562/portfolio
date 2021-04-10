import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isStiky, setStiky] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setStiky(true);
        } else {
            setStiky(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })
    const activeNav = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <div onClick={activeNav} className={isActive ? "navigator active-btn d-none d-md-flex" : isStiky ? "navigator d-none d-md-flex top" : "navigator d-none d-md-flex"}>
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </div>
            <div onClick={activeNav} className={isActive ? "navigator-movile active-btn d-flex d-md-none" : "navigator-movile d-flex d-md-none"}>
                {
                    isActive
                    ? <FontAwesomeIcon icon={faArrowLeft} className="icon-menu" size="2x" />
                    : <FontAwesomeIcon icon={faArrowRight} className="icon-menu" size="2x" />
                }
            </div>
            <nav className={isActive ? "nav-custom active-nav" : "nav-custom"}>
                <a style={{fontSize:'40px'}} className="tecdevs" href="https://tecdevsmx.com" target="_blank" rel="noreferrer"><strong style={{color: 'white'}}>Tec</strong><span className="dev">Devs/{'>'}</span></a>
                <ul>
                    <li><a className="link" onClick={activeNav} href="#presentacion">Presentación</a></li>
                    <li><a className="link" onClick={activeNav} href="#experiencia">Experiencia</a></li>
                    <li><a className="link" onClick={activeNav} href="#contacto">Contacto</a></li>
                </ul>
                <p className="aboutTec">Conoce mas sobre TecDevs <a href="https://tecdevsmx.com">Aquí</a></p>
            </nav>
        </>
    )
}
