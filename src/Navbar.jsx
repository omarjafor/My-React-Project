import logo from './image/brand_logo.png'

export default function Navbar(){
    return(
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className="menuList">
                    <li>MENU</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    )
}