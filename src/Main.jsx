import React from 'react'
import { Contacto } from './components/Contacto'
import { Experiencia } from './components/Experiencia'
import { Footer } from './components/Footer'
import { Habilidades } from './components/Habilidades'
import { Navbar } from './components/Navbar'
import { Presentacion } from './components/Presentacion'
import { SocialMenu } from './components/SocialMenu'

export const Main = () => {
    return (
        <div className="container-fluid h-100 background">
            <div className="row justify-content-center">
                <div className="form col-12"></div>
            </div>
            <Navbar />
            <SocialMenu />
            <Presentacion />
            <Habilidades />
            <Experiencia />
            <Contacto />
            <Footer />
        </div>
    )
}
