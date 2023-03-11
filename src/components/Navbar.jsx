import { useState } from "react"
import { Link } from "react-router-dom"
import { fonts } from "../assets/fonts"
import Logo from '../assets/ar.png'
const Navbar = ({ setQFont }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
        {/* <Link to='/'><span className="navbar__logo">أقوال عربية</span></Link> */}
        <Link to='/'>
          <div className="navbar__logo">
            <img src={Logo} alt="أقوال عربية" />
          </div>
        </Link>
        <span onClick={() => setIsOpen(prev=>!prev)} className="navbar__menu"></span>

        {isOpen&&(
          <div className="navbar">
            <div className="navbar__main">
              <h3>Fonts</h3>
              <ul className="navbar__main-list">
                  {fonts?.map((item, i)=>(
                      <li onClick={() => {setQFont(item.className); setIsOpen(false)}} key={i} className={item.className}>بالخط العربي</li>
                  ))}
              </ul>

              <span className="by-dai">Dai Chekkal</span>
            </div>
          </div>
        )}
    </>
  )
}

export default Navbar
