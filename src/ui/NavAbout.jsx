import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../router/AppRouter'

export const NavAbout = () => {
    const { fProject, setFProject } = useContext(userContext)
    const { setFSkill } = useContext(userContext)
    return (

        <div className='navbar container sticky-top navAbout navAboutB'>

            <h2 className='text-light'>About me - {fProject ? "My projects" : "My skills"}</h2>
           
            <div className='row d-flex justify-content-center' >

                <div className='col-md-12'>
                    <button
                        className='w-100 my-2 fs-2 buttonAbout'

                        onClick={() => { setFProject(true); setFSkill(false) }}
                    >
                        Mis proyectos
                    </button>
                </div>

                <div className='col-md-12'>
                    <button
                        className='w-100 my-2 fs-2 buttonAbout'

                        onClick={() => { setFProject(false); setFSkill(true) }}
                    >
                        Mis Habilidades
                    </button>
                </div>
            </div>

            <Link className='text-light fs-5' to="/">
                y- Go back home
            </Link>


        </div>

    )
}
