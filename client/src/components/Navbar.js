import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Button2 } from './Button2';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        AutoInject  <i className='fas fa-car'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Pagrindinis puslapis
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Servisai
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/parts' className='nav-links' onClick={closeMobileMenu}>
                                Detalės
                            </Link>
                        </li>
                        <li className='nav-links-mobile'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Prisijungimas
                            </Link>
                        </li>
                        <li className='nav-links-mobile'>
                            <Link to='/registration' className='nav-links-mobile' onClick={closeMobileMenu}>
                                PRegistracija
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Prisijungimas</Button>}
                    {button && <Button2 buttonStyle='btn--outline'>Registracija</Button2>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
