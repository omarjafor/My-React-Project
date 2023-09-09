import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='navbar'>
      <div className="logo">
          <img src="src/image/brand_logo.png" alt=""/>
      </div>
      <div>
        <ul className="menuList">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <button>Login</button>
    </div>
    </>
  )
}

export default App
