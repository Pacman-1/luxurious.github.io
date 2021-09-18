import React, {useState,useEffect} from 'react'
import  {Link} from 'react-router-dom'
import {MdFingerprint} from "react-icons/md"
import {FaBars,FaTimes} from "react-icons/fa"
import {Button} from "./Button"
import "./NavBar.css"; 
import {IconContext} from "react-icons/lib"


function NavBar() {
    
    const [click,setClick]=useState(false)

    const closeMobileMenu = () => setClick(false)

    const [button,setButton] = useState(true)

    const showButton = () => {
        if (window<=960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener("resize",showButton)


    const handleClick = ()=> {
        setClick(!click)
    }

  
    

    return (
        <>
         <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
              Luxurious
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link' >
                    <Button 
                    
                    onClick={closeMobileMenu}
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                    
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
        </>
    )
}

export default NavBar

