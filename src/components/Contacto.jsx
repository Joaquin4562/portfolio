import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';

export const Contacto = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loading, setLoading] = useState(false);
    const submitEmail = data => {
        if (watch('testSend') === '110') {
            setLoading(true);
            axios.post('https://backend-portfolio-joaquin-4562.herokuapp.com/send-email', data)
                .then((response) => {
                    if (!response.data.error) {
                        Swal.fire({
                            confirmButtonText: 'Aceptar',
                            title: 'Se envio el correo.',
                            text: 'Me pondre en contacto lo mas pronto posible.'
                        });
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            Swal.fire({
                confirmButtonText: 'Aceptar',
                title: 'La respuesta es incorrecta'
            });
        }
    }
    return (
        <section className="row mt-4 pl-0 pl-md-5 pr-0 pr-md-5" id="contacto">
            <div className="col-12 mt-2">
                <h1 className="section-title">Contacto</h1>
                <div className="divider mb-2"></div>
                <form onSubmit={handleSubmit(submitEmail)} className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label htmlFor="mail">Correo electronico:</label>
                                <input name="email" ref={register({required: true})} id="mail" type="text" className="form-control" placeholder="ejemplo@gmail.com"/>
                                {errors.email && <small style={{color: 'red'}} className="form-text">Asegurate de escribir bien el correo.</small>}
                            </div>
                            <div className="col-6 form-group">
                                <label htmlFor="tel">Telefono:</label>
                                <input name="phone" ref={register({required: true})} id="tel" type="text" className="form-control" placeholder="+52 8311314099"/>
                                {errors.phone && <small style={{color: 'red'}} className="form-text">El telefono es requerido.</small>}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 form-group">
                        <label>Nombre completo:</label>
                        <input name="nameContact" ref={register({required: true})} type="text" className="form-control" placeholder="Fulanito Perez Ruiz"/>
                        {errors.nameContact && <small style={{color: 'red'}} className="form-text">El nombre es requerido.</small>}
                    </div>
                    <div className="col-12 col-md-8 form-group">
                        <label>Mensaje:</label>
                        <textarea name="message" ref={register({required: true})} className="form-control" 
                            style={{maxHeight: '300px', minHeight: '200px', resize:'none'}} 
                            placeholder="Me interesan sus servicios...">
                        </textarea>
                        {errors.message && <small style={{color: 'red'}} className="form-text">El mensaje es requerido.</small>}
                    </div>
                    <div className="w-100"></div>
                    <div className="col-8 col-md-4 form-group">
                        <label htmlFor="test">¿Cuanto es 66 + 44?</label>
                        <input name="testSend" ref={register({required: true})} className="form-control" type="text" id="test"/>
                        {errors.testSend && <small style={{color: 'red'}} className="form-text">La respuesta es requerida.</small>}
                    </div>
                    <div className="w-100"></div>
                    <div className="col-8 col-md-6">
                        {!loading && <button type="submit" className="btn btn-send mb-2">Envíar</button>}
                        {loading && <div className="spinner mb-2">
                                <div className="rect1"></div>
                                <div className="rect2"></div>
                                <div className="rect3"></div>
                                <div className="rect4"></div>
                                <div className="rect5"></div>
                        </div>}
                    </div>
                </form>
            </div>
        </section>
    )
}
