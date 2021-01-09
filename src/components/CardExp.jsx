import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardExp = ({nombre, descripcion, tecnologias, github, direccion, img}) => {
    return (
        <div className="row card-custom mt-2" data-aos="fade-up">
            <div className="col-12 col-md-7">
                <div className="row">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-10">
                                <span className="title-proyect">{nombre}</span>
                            </div>
                            <div className="col-2">
                                <a 
                                    href={direccion}
                                    target="_blank" rel="noreferrer"> 
                                    <FontAwesomeIcon icon={faLink} className="mr-2 icon-link" />
                                </a>
                                <a 
                                    href={github} 
                                    target="_blank" 
                                    rel="noreferrer">
                                        <FontAwesomeIcon className="icon-link" icon={['fab', 'github']} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <p>
                            {descripcion}
                        </p>
                    </div>
                    <div className="col-12 mt-2">
                        <h3 className="sub-title">Tecnologias usadas</h3>
                        {
                            tecnologias.map((value, key) => {
                                return (
                                    <span key={key} className="badge badge-info ml-2">{value}</span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-5 mt-2">
                <img data-aos="fade-up" src={img} alt={nombre} className="img-fluid img-proyect"/>
            </div>
        </div>
    )
}
