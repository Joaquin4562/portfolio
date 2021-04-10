import React from 'react'
import {laboralProyects, shoolProyects} from '../assets/data/proyects'
import { CardExp } from './CardExp'


export const Experiencia = () => {
    return (
        <section id="experiencia" className="row pl-0 pl-md-5 pr-0 pr-md-5">
            <div className="col-12 mb-2">
                <h2 className="seccion-title">Experiencia laboral</h2>
            </div>
            <div className="divider mb-2"></div>
            <div className="col-12">
                {
                    laboralProyects.map((value, key) => {
                        return (
                            <CardExp 
                                key={key} 
                                nombre={value.nombre} 
                                descripcion={value.descripcion}
                                github={value.github}
                                direccion={value.direccion}
                                tecnologias={value.tecnologias}
                                img={value.img}
                                owner={value.owner}
                                repoName={value.repoName}
                            />
                        )
                    })
                }
            </div>
            <div className="col-12 mt-5 mb-2">
                <h2 className="seccion-title">Experiencia escolar</h2>
            </div>
            <div className="divider mb-2"></div>
            <div className="col-12">
                {
                    shoolProyects.map((value, key) => {
                        return (
                            <CardExp 
                                key={key} 
                                nombre={value.nombre} 
                                descripcion={value.descripcion}
                                github={value.github}
                                direccion={value.direccion}
                                tecnologias={value.tecnologias}
                                img={value.img}
                                owner={value.owner}
                                repoName={value.repoName}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
