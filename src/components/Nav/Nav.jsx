import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'
import { AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {
    const [visibleItems, setVisibleItems] = useState(0);
    const [menu, setMenu] = useState(false);

    const handleMenuMobile = () => {
        setMenu(!menu);
    }

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            if( count === 4){
                clearInterval(interval);
                return;
            }
            setVisibleItems(prevVisibleItems => prevVisibleItems + 1)
            count++;
        }, 200);
        
        return () => clearInterval(interval)
    },[])
  return (
    <>
        <nav className='nav flex md:flex-row h-[70px] items-center' >
            <div className='nav-my-logo  w-[30%] md:w-[25%] lg:w-[250px] flex'>
                <img src="../images/logo.png" className='w-[90%] ml-[10%]' alt="logo" />
            </div>
            <ul className='nav-header md:w-[70%] ml-[3%] fade-in'>
                <li className={visibleItems >= 1 ? 'visible' : ''}>
                    <NavLink to='/'>
                        HOME
                    </NavLink>
                </li>
                <li className={visibleItems >= 2 ? 'visible' : ''}>
                    <NavLink to='/aboutme'>
                        ABOUT ME
                    </NavLink>
                </li>
                <li className={visibleItems >= 3 ? 'visible' : ''}>
                    <NavLink to='/myproject'>
                        MY PROJECT
                    </NavLink>
                </li>
            </ul>
            <div className='icon-menu-mobile' onClick={handleMenuMobile}>
                <AiOutlineMenu />
            </div>
            <div className={`nav-mobile ${menu?'open-menu':''}`}>
                <ul>
                    <li onClick={handleMenuMobile}>
                        <NavLink to='/'>
                            HOME
                        </NavLink>
                    </li>
                    <li onClick={handleMenuMobile}>
                        <NavLink to='/aboutme'>
                            ABOUT ME
                        </NavLink>
                    </li>
                    <li onClick={handleMenuMobile}>
                        <NavLink to='/myproject'>
                            MY PROJECT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Nav