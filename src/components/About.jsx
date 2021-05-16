import React from 'react';
import style from './general.module.css'

export default function About(){
    return (
        <div>
            <p className={style.pa}>
                Esta pagina fue creada con react,
                donde mostraremos los climas
                de distintas ciudades y paises del mundo.
                </p>
        </div>
    );
}