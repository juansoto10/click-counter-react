import React from "react";
import '../stylesheets/Button.css'

function Button({ text, isClickButton, handleClick }) {
  return (
    <button
      className={isClickButton ? 'button-click' : 'button-restart'}
      onClick={handleClick}>
      {text}
    </button>  
  );  
}

export default Button;