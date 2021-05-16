import React, { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div className={style.container}>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={`btn ${style.btnSearch}`} type="submit" value="Agregar" />
    </form>
    </div>
  );
}
