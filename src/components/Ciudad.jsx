import React from 'react';
import style from './general.module.css'

export default function Ciudad({city}) {
    if(city){
        return (
            <div className="ciudad">
                <div className={style.conteiner}>
                    <h2 className={style.name}>{city.name}</h2>
                    <div className={style.info}>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
        } else{
            return (
                <div>
                    No se encontro la cuidad
                </div>
            )
        }
}