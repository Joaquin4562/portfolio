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
                                <p className="mt-3 description">Soy un programador Jr enfocado en el desarrollo web y mobile.</p>
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
                                        <a className="icon-social" href="https://www.linkedin.com/in/gerardo-joaquin-martinez-hernandez-65aa361b2/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-s" icon={['fab', 'linkedin']} size="2x"/> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-md-4">
                                <img data-aos="fade-up" src={me} alt="imagen mia" className="img-fluid avatar"/>
                            </div>
                            <div className="col-12">
                                <p className="text-right description comillas">El cansancio es temporal, la satisfacción para siempre</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    )
}
