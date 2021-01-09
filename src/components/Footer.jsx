import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Footer = () => {
    return (
        <section id="footer" className="row h-25" style={{background: 'black'}}>
            <div className="col-12 text-center mt-1">
                <a style={{fontSize: 40, textDecoration: 'none'}} href="https://tecdevsmx.com" target="_blank" rel="noreferrer"><strong style={{color: 'white'}}>Tec</strong><span className="dev">Devs/{'>'}</span></a>
                <p style={{color: 'white', fontFamily: 'Roboto Mono'}}>Todos los derechos reservados</p>
            </div>
            <div className="col-12 text-center">
                <a style={{textDecoration: 'none'}} className="ml-2" href="https://github.com/joaquin4562" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'github']} size="2x"/> </a>
                <a style={{textDecoration: 'none'}} className="ml-2" href="https://www.facebook.com/jukin.mtz" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'facebook']} size="2x"/> </a>
                <a style={{textDecoration: 'none'}} className="ml-2" href="https://www.instagram.com/gerardojoaquin_/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'instagram']} size="2x"/> </a>
                <a style={{textDecoration: 'none'}} className="ml-2" href="https://www.linkedin.com/in/gerardo-joaquin-martinez-hernandez-65aa361b2/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'linkedin']} size="2x"/> </a>
            </div>
        </section>
    )
}
