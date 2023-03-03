import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import computador from "../photos/Computador.png"

export const MySkills = () => {
    const [barra, setBarra] = useState(false)


    useEffect(() => {
        setBarra(true)
        
    }, [])
    


    return (
        <div className='text-light px-5 pt-5 '>
            <p>
                Llevo poco mas de un año aprendiendo e introduciéndome en el mundo del desarrollo de sistemas. También, he explorado diversas tecnologías a lo largo de mi carrera, algunas de las cuales me llamaron más la atención y las estudié más a profundidad:
            </p>
           
                <div className='row my-1'>
                    <div className='col-lg-4 col-sm-12'>
                        React
                    </div>
                    <div className=" col-lg-8 col-sm-12 progress colorsec  p-0">
                        <div className="progress-bar colorletra" style={{ "width": (barra ? "65%" : "0%") }} role="progressbar">65%</div>
                    </div>
                </div>

                <div className='row my-1'>
                    <div className='col-lg-4 col-sm-12'>
                        MySQL/SQLServer
                    </div>
                    <div className=" col-lg-8 col-sm-12 progress colorsec p-0">
                        <div className="progress-bar colorletra" style={{ "width": (barra ? "70%" : "0%") }} role="progressbar">70%</div>
                    </div>
                </div>

                <div className='row my-1'>
                    <div className='col-lg-4 col-sm-12'>
                        Node
                    </div>
                    <div className=" col-lg-8 col-sm-12 progress colorsec p-0">
                        <div className="progress-bar colorletra" style={{ "width": (barra ? "60%" : "0%") }} role="progressbar">60%</div>
                    </div>
                </div>

                <div className='row my-1'>
                    <div className='col-lg-4 col-sm-12'>
                        CSS
                    </div>
                    <div className=" col-lg-8 col-sm-12 progress colorsec p-0">
                        <div className="progress-bar colorletra" style={{ "width": (barra ? "65%" : "0%") }} role="progressbar">65%</div>
                    </div>
                </div>

                <div className='row my-1'>
                    <div className='col-lg-4 col-sm-12'>
                        AndroidStudio
                    </div>
                    <div className=" col-lg-8 col-sm-12 progress colorsec p-0">
                        <div className="progress-bar colorsec colorletra" style={{ "width": (barra ? "50%" : "0%") }} role="progressbar">50%</div>
                    </div>
                </div>

            <p className='my-2'>
                Además, he utilizado lenguajes como C, C++, C#, Kotlin, y en especial, Python; éste último lo usé frecuentemente para proyectos relacionados a IA o competencias de programación.
            </p>

            <p className='fw-bold fs-5'>
                Idiomas:
            </p>
            

                <div className='row'>
                    <div className='col-lg-4 col-sm-12'>
                        Ingles hablado
                    </div>
                    <div className='col-lg-8 col-sm-12 progress colorsec p-0'>
                        <div className="progress-bar colorletra" style={{ "width": (barra ? "60%" : "0%") }} role="progressbar">60%</div>
                    </div>

                    <div className='col-lg-4 col-sm-12'>
                        Ingles escrito
                    </div>
                    <div className='col-lg-8 col-sm-12 progress colorsec p-0'>
                        <div className="progress-bar colorletra" style={{ "width": (barra ? "65%" : "0%") }} role="progressbar">65%</div>
                    </div>
                </div>
  
                <div className='row'>
                    <div className='col-12 mt-5 pt-5 text-center'>
                        <p className='fs-5'>
                            Siempre estoy dispuesto a aprender y enseñar, me gustan los nuevos retos. ¡Contáctame y construyamos un proyecto juntos!
                        </p>
                        <div className='text-center'>
                            <Link to={"/contact"} className="btn btn-outline-dark text-light"> Contactar </Link>
                        </div>

                    </div>
                    <div className='text-center mt-5 col-12'>
                        <img src={computador} className="img-fluid computador" alt="computador" />
                    </div>
                </div>


        </div>
    )
}
