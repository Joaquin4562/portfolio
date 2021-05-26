import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import me from '../assets/me.jpeg'

export const Presentacion = () => {
    return (
        <div className="row h-100">
                <div className="col-12">
                    <section className="container-fluid h-100" id="presentacion">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-12 col-md-6">
                                <h2 className="title">Hola, me llamo Joaquin y soy <strong data-aos="fade-up" className="decoration">FullStack</strong> developer</h2>
                                <p className="mt-3 description">Soy un programador Jr enfocado en el desarrollo web y móvil.</p>
                                <div className="row justify-content-center">
                                    <div className="col-2">
                                        <a className="icon-social" href="https://github.com/joaquin4562" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s"  icon={['fab', 'github']} size="2x"/> </a>
                                    </div>
                                    <div className="col-2">
                                        <a className="icon-social" href="https://www.facebook.com/jukin.mtz" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s"  icon={['fab', 'facebook']} size="2x"/> </a>
                                    </div>
                                    <div className="col-2">
                                        <a className="icon-social" href="https://www.instagram.com/gerardojoaquin_/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s"  icon={['fab', 'instagram']} size="2x"/> </a>
                                    </div>
                                    <div className="col-2">
                                        <a className="icon-social" href="https://www.linkedin.com/in/g-joaquin-mtz-hdz/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s" icon={['fab', 'linkedin']} size="2x"/> </a>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <div className="row justify-content-center">
                                            <div className="col-6">
                                                <a href="#experiencia" className="btn btn-send">Ve mi experiencia</a>
                                            </div>
                                            <div className="col-6">
                                                <a href="#contacto" className="btn btn-send">¿Deseas contactarme?</a>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                                <a href="https://drive.google.com/file/d/1P3c4_OgCtFo9DJ0_3RCrraFQ7dC7OEsy/view?usp=sharing" 
                                                    className="btn btn-send" target="_blank" rel="noreferrer">Ve mi CV</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-md-4 d-none d-md-block">
                                <img data-aos="fade-up" src={me} alt="imagen mia" className="img-fluid avatar"/>
                            </div>
                            <div className="col-12">
                                <p className="text-right description comillas writer">El poder mas grande es el conocimiento</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    )
}
