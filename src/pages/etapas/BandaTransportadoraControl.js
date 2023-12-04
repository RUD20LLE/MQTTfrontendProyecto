import React, { useState } from 'react';import './zstwich.css';function BandaTransportadoraControl({ handleToggleImage }) {  const [isOn, setIsOn] = useState(false);  const handleToggle = async () => {    const nuevoEstado = isOn ? 'APAGADO' : 'ENCENDIDO';    try {      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/banda-transportadora/control`, {        method: 'POST',        headers: { 'Content-Type': 'application/json' },        body: JSON.stringify({ estado: nuevoEstado }),      });      if (!response.ok) {        throw new Error('Error al cambiar el estado');      }      setIsOn(!isOn);      handleToggleImage('banda');    } catch (error) {      console.error(error.message);    }  };  return (    <label className="switch-button" htmlFor="switch">      <div className="switch-outer">        <input id="switch" type="checkbox" checked={isOn} onChange={handleToggle} />        <div className="button">          <span className="button-toggle"></span>          <span className="button-indicator"></span>        </div>      </div>    </label>  );}export default BandaTransportadoraControl;