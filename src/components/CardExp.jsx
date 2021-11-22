import React, { useEffect, useState } from 'react'
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import axios from 'axios';

export const CardExp = ({nombre, descripcion, tecnologias, github, direccion, img, owner, repoName}) => {
    const {REACT_APP_GHAT} = process.env;
    const URL = 'https://api.github.com/repos/';
    const accesToken = REACT_APP_GHAT;
    const [colaboradores, setColaboradores] = useState([]);
    useEffect(() => {
        if (github !== 'private')
        axios.get(`${URL}${owner}/${repoName}/collaborators`, {
            headers: {
                'Authorization': `token ${accesToken}`
            }
        }).then(response => setColaboradores(response.data))
    },[owner, repoName]);
    return (
        <div className="row card-custom mt-4 mb-4" data-aos="fade-up">
            <div className="col-12 col-md-7">
                <div className="row">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-10">
                                <span className="title-proyect">{nombre}</span>
                            </div>
                            {
                                github !== 'private' 
                                ?   <div className="col-2">
                                        <a className="icon-social-card"
                                            href={direccion}
                                            target="_blank" rel="noreferrer"> 
                                            <FontAwesomeIcon className="mr-4 mb-2 icon-s-card" icon={faCodeBranch} />
                                        </a>
                                        <a className="icon-social-card"
                                            href={github}
                                            target="_blank" 
                                            rel="noreferrer">
                                                <FontAwesomeIcon className='icon-s-card' icon={faGithubAlt} />
                                        </a>
                                    </div>
                                : <div className="col-2">
                                    <div className="private">
                                        Privado
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <p>
                            {descripcion}
                        </p>
                    </div>
                    <div className="col-12 mt-2">
                        <h3 className="sub-title">Tecnologías usadas</h3>
                        {
                            tecnologias.map((value, key) => {
                                return (
                                    <span key={key} className="badge badge-info ml-2">{value}</span>
                                )
                            })
                        }
                    </div>
                    <div className="col-12 mt-3">
                        <h3 className="sub-title">Colaboradores</h3>
                        {
                            colaboradores.map((value, key) => {
                                return (
                                    <a 
                                        key={key} 
                                        href={value.html_url} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        data-toggle="tooltip" 
                                        data-placement="top" 
                                        title={value.login}>
                                            <img 
                                            src={value.avatar_url} 
                                            alt={value.login}
                                            className="img-git ml-1"
                                            width="30px"/>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-5 mt-2 w-100 d-flex align-items-center">
                <img data-aos="fade-up" src={img} alt={nombre} className="img-fluid img-proyect"/>
            </div>
        </div>
    )
}
