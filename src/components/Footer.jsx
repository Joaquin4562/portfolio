import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import  {faArrowUp} from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 3500) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    }, [])
    const handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <section id="footer" className="row h-25" style={{background: 'black'}}>
            <div className="col-12 text-center mt-2">
                <a style={{fontSize: 40, textDecoration: 'none'}} href="https://tecdevsmx.com" target="_blank" rel="noreferrer"><strong style={{color: 'white'}}>Tec</strong><span className="dev">Devs/{'>'}</span></a>
                <p style={{color: 'white', fontFamily: 'Roboto Mono'}}>Todos los derechos reservados</p>
            </div>
            <div className="col-12 text-center">
                <a style={{textDecoration: 'none'}} className="ml-2" href="https://github.com/joaquin4562" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'github']} size="2x"/> </a>
                <a style={{textDecoration: 'none'}} className="ml-2" href="https://www.facebook.com/jukin.mtz" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'facebook']} size="2x"/> </a>
                <a style={{textDecoration: 'none'}} className="ml-2" href="https://www.instagram.com/gerardojoaquin_/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'instagram']} size="2x"/> </a>
                <a style={{textDecoration: 'none'}} className="ml-2" href="https://www.linkedin.com/in/gerardo-joaquin-martinez-hernandez-65aa361b2/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'linkedin']} size="2x"/> </a>
            </div>
            <div className={isVisible ? 'up' : 'd-none'} onClick={handleClick}>
                <FontAwesomeIcon icon={faArrowUp} size='2x'></FontAwesomeIcon>
            </div>
        </section>
    )
}
