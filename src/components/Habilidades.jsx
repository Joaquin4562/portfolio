import React from 'react'

import react from '../assets/logos/react.png'
import bootstrap from '../assets/logos/bootstrap.png'
import typescript from '../assets/logos/typescript.png'
import c from '../assets/logos/c.png'   
import flutter from '../assets/logos/flutter.png'
import nodejs from '../assets/logos/nodejs.png'
import java from '../assets/logos/java.png'
import angular from '../assets/logos/angular.png'
import css from '../assets/logos/css.png'
import dart from '../assets/logos/dart.png'
import javascript from '../assets/logos/javascript.png'
import mysql from '../assets/logos/mysql.png'
import html from '../assets/logos/html.png'
import php from '../assets/logos/php.png'
import socket from '../assets/logos/socket.png'

export const Habilidades = () => {
    const logosT  = [
                {img: angular, name: 'Angular'}, 
                {img: bootstrap, name: 'Bootstrap'}, 
                {img: react, name: 'React'}, 
                {img: flutter, name: 'Flutter'}, 
                {img: nodejs, name: 'Node js'}, 
                {img: mysql, name: 'Mysql'},  
                {img: socket, name: 'Socket.io'}, 
        ];
    const logosL = [
                {img: typescript, name: 'Typescript'}, 
                {img: css, name: 'CSS'}, 
                {img: dart, name: 'Dart'}, 
                {img: java, name: 'Java'}, 
                {img: javascript, name: 'Javascript'}, 
                {img: c, name: 'C#'}, 
                {img: html, name: 'HTML'}, 
                {img: php, name: 'PHP'},
            ];
    return (
        <div className="row pl-0 pl-md-5 pr-0 pr-md-5" id="habilidades">
            <div className="col-12 mb-2">
                <h2 className="seccion-title">Habilidades</h2>
            </div>
            <div className="divider mb-2"></div>
            <div className="col-12">
            <p className="mt-3 description text-justify">
            Soy estudiante de I.S.C <b>apasionado</b> por desarrollar aplicaciones móviles y páginas web, 
            me gusta ponerme retos y cumplirlos, el trabajo que hago siempre trato de hacerlo 
            de manera <b>eficiente</b> para el futuro. Siempre me mantengo <b>actualizado</b> aprendiendo nuevas
            tecnologías para ponerlas en práctica en proyectos personales o laborales. 
            </p>
            </div>
            <div className="col-12">
                <div className="description">
                    Las <b>tegnologías</b> donde tengo mas experiencia son:
                </div>
            </div>
            <div className="col-12">
                <div className="row justify-content-around mt-3">
                    {
                        logosT.map((e, i) => {
                            return <div className={`ml-3 mb-3 d-flex justify-content-center  align-items-center back`} 
                            key={i}
                            data-toggle="tooltip" data-placement="top" title={e.name}>
                                <img  width={60} height={60} src={e.img} alt={e.name}/>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="description">
                    Los <b>lenguajes</b> donde tengo mas experiencia son:
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className="row justify-content-around mt-3">
                    {
                        logosL.map((e, i) => {
                            return <div className={`ml-3 mb-3 d-flex justify-content-center  align-items-center back`} 
                            key={i}
                            data-toggle="tooltip" data-placement="top" title={e.name}>
                                <img  width={60} height={60} src={e.img} alt={e.name}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
