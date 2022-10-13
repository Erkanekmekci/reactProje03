import React from 'react'
import "./Header.css";
import img from "../../img/clarusway.png"

const Header = () => {
  return (
    <div className='header'>
      <img src={img} alt="img" width={500} />
    </div>
  )
}

export default Header