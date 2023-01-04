import React from "react";
import logo from './logoBurg.svg'
import './logo.scss'

const Logo = () => {
    return(
        <div className="logo">
            <img className="logo__img" src={logo} alt="logo" />
            <p className="logo__text" >Добро пожаловать в “Фабрику бургеров”</p>
        </div>
        
    )
}

export default Logo