import React, { useState } from 'react';function EnjabonadoControl() {  const [isOn, setIsOn] = useState(false);  const handleToggle = async () => {    const nuevoEstado = isOn ? 'APAGADO' : 'ENCENDIDO';    try {      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/enjabonado/control`, {        method: 'POST',        headers: { 'Content-Type': 'application/json' },        body: JSON.stringify({ estado: nuevoEstado }),      });      if (!response.ok) {        throw new Error('Error al cambiar el estado');      }      setIsOn(!isOn);    } catch (error) {      console.error(error.message);    }  };  return (    <label className="switch-button" htmlFor="enjabonado-switch">      <div className="switch-outer">        <input id="enjabonado-switch" type="checkbox" checked={isOn} onChange={handleToggle} />        <div className="button">          <span className="button-toggle"></span>          <span className="button-indicator"></span>        </div>      </div>    </label>  );}export default EnjabonadoControl;