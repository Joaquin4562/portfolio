import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithubAlt, faFacebook, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export const SocialMenu = () => {
    return (
        <div className="social d-none d-md-flex">
            <a className="icon-social-fixed" href="https://github.com/joaquin4562" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s-fixed" icon={faGithubAlt} size="2x"/> </a>
            <a className="icon-social-fixed" href="https://www.facebook.com/jukin.mtz" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s-fixed" icon={faFacebook} size="2x"/> </a>
            <a className="icon-social-fixed" href="https://www.instagram.com/gerardojoaquin_/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s-fixed" icon={faInstagram} size="2x"/> </a>
            <a className="icon-social-fixed" href="https://www.linkedin.com/in/g-joaquin-mtz-hdz/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s-fixed" icon={faLinkedinIn} size="2x"/> </a>
        </div>
    )
}