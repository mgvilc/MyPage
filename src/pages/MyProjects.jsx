import React from 'react'
import { projects } from '../data/project'
import { ListTec } from '../ui/ListTec'

export const MyProjects = () => {

    return (
        <div className='text-light text-center p-2'>

            {
                projects.map((project) => (
                    <div className='card cardProject my-3' key={project.nombre}>
                        <div className='pictures'>
                            <img src={project.imagen} className="img-fluid proyecto" alt={project.nombre} />

                        </div>
                        <div className='card-body'>
                            <h5 className='car-title'>{project.nombre}</h5>
                            <p> {project.descripcion} </p>
                            {
                                project.link ?
                                    <div>
                                        <a className='mx-3' target="_blank" rel="noreferrer noopener" href='https://www.matematicasconjimmy.com'> <ion-icon name="link-outline" style={{ "font-size": "2rem" }}></ion-icon> </a><br/>
                                        <span style={{"font-size":"0.8rem"}}>webpage</span>
                                    </div>
                                    : ""


                            }
                            <div className=''>
                                <p>Tecnologias usadas: </p>
                                <ListTec lista={project.tecnologias} />
                            </div>
                        </div>

                    </div>
                ))
            }

        </div>

    )
}
