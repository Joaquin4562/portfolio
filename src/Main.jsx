import React from 'react'
import { Contacto } from './components/Contacto'
import { Experiencia } from './components/Experiencia'
import { Footer } from './components/Footer'
import { Habilidades } from './components/Habilidades'
import { Navbar } from './components/Navbar'
import { Presentacion } from './components/Presentacion'

export const Main = () => {
    return (
        <div className="container-fluid h-100">
            <Navbar />
            <Presentacion />
            <Habilidades />
            <Experiencia />
            <Contacto />
            <Footer />
        </div>
    )
}
