import React from 'react'
import { NavLink } from 'react-router-dom'
import avat from "./../photos/avat.jpeg"

export const NavBarSide = () => {
    return (
        <div className='sticky-top mt-4 text-light py-2'>
            <ul className='navS itemsNav mx-4'>
                <li className='my-1 '>
                    <img src={avat} className="img-fluid avatar" alt="avatar" />


                </li>
                <li className='my-1'>
                    <NavLink
                        className={({ isActive }) => "text-light nav-link " + (isActive ? "active" : "")}
                        to="/"
                    >
                        <i className="fa-solid fa-house "></i> <span className="mx-2 d-none d-md-inline">Home</span>
                    </NavLink>

                </li>

                <li className='my-1'>
                    <NavLink
                        className={({ isActive }) => "text-light nav-link " + (isActive ? "active" : "")}
                        to="/projects"
                    >
                        <i className="fa-solid fa-laptop-code "></i><span className="mx-2 d-none d-md-inline">Projects</span>
                    </NavLink>
                </li>

                <li className='my-1'>
                    <NavLink
                        className={({ isActive }) => "text-light nav-link " + (isActive ? "active" : "")}
                        to="/skills"
                    >
                        <i class="fa-solid fa-brain "></i><span className="mx-2 d-none d-md-inline">Skills</span>
                    </NavLink>
                </li>

                <li className='my-1'>
                    <NavLink
                        className={({ isActive }) => "text-light nav-link " + (isActive ? "active" : "")}
                        to="/contact"
                    >
                        <i class="fa-solid fa-comment-sms "></i><span className='mx-2 d-none d-md-inline'>Contact</span>
                    </NavLink>
                </li>
            </ul>

            <ul className={'navS navRedes my-2 '+(window.screenY>800 ? "d-flex justify-content-center" : "")}>
                <li className='my-2'>
                    <a target="_blank" rel="noreferrer noopener" href='https://www.facebook.com/profile.php?id=100010537685724'> <ion-icon name="logo-facebook" color="light" size="large"></ion-icon> </a>
                </li>
                <li className='my-2'>
                    <a target="_blank" rel="noreferrer noopener" href='https://wa.link/s1vqkw'> <ion-icon name="logo-whatsapp" color="light" size="large"></ion-icon></a>

                </li>
                <li className='my-2'>
                    <a target="_blank" rel="noreferrer noopener" href='https://instagram.com/migguelvc?igshid=NTA5ZTk1NTc='><ion-icon name="logo-instagram" color="light" size="large"></ion-icon></a>

                </li>
            </ul>

            <div className='my-3'>
                <span className='text-light d-none d-sm-inline'>  © Elaborado en 2023 </span> <br />
                <span className='text-light text-muted d-none d-sm-inline'> Página en desarrollo</span>
            </div>
        </div>


    )
}
