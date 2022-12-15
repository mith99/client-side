import React from 'react'
import '../NavBar/Navbar.scss'
import Arrow from '../../Assets/arrow.svg'

const Navbar = () => {
    return (
        <div className='nav-margins'>
            <div className='navbar-position'>
                <div className='nav-container'>
                    <div className='nav-container vertical-center'>
                          <div className='admin-txt'>ADMIN</div>
                        <img src={Arrow} className='arrow' /></div>


                    <div className='avatar'></div>

                </div>
            </div>
        </div>
    )
}

export default Navbar