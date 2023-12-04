import React from 'react';import './Background.css';const Background = ({ showImage, onToggleClick, imagePath, altText }) => {  return (    <div className={`background ${showImage ? 'visible' : 'hidden'}`}>      <div className="image-container">        <img          src={imagePath}          alt={altText}          className="background-image"        />      </div>      <button className="toggle-button" onClick={onToggleClick}>        Mostrar/Ocultar      </button>    </div>  );};export default Background;