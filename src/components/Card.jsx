import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={style.fondo}>
      <button className={style.boton}onClick={props.onClose}>X</button>
      <Link to={`/ciudad/${props.id}`} >
          <h5 className={style.cardtitle}>{props.name}</h5>
      </Link>
        <div className={style.conteiner}>
          <div className={style.text}>
            <p>Min</p>
            <p>{props.min}°</p>
          </div>
          <div className={style.text}>
            <p>Max</p>
            <p>{props.max}°</p>
          </div>
        </div>
        <img className={style.image} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}></img>
    </div>
    );
};