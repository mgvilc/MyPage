import React from 'react'
import { Carousel } from '../ui/Carousel'
import { Sphere } from '../ui/Sphere'
import { Link } from "react-router-dom"
import { Pie } from '../ui/Pie'


export const HomeScreen = () => {
  return (

    <div className='text-light'>
      <div className='py-5 px-lg-5 px-md-3 px-1'>
        <div className='py-5 text-light text-center' >
          <h1 className='p-5' style={{"fontFamily":"Comic Sans MS"}}> ¡Hola!, Mi nombre es Miguel </h1>
          <p className='px-5 fs-5'>
            Soy estudiante del último semestre de la escuela profesional de Ingeniería Informática y de Sistemas de la Universidad Nacional de San Antonio Abad del Cusco.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='row text-light d-flex justify-content-center'>
          <div className='col-lg-5 mx-sm-2  col-11 my-3'>
            <h3 className='text-center fw-bold' style={{ "color": "var(--letra)", "fontFamily":"Comic Sans MS" }}> Mis habilidades </h3>
            <p className='mt-3 text-center'> Siempre estoy dispuesto a aprender y experimentar con nuevas herramientas. </p>
            <div>
              <Sphere />
            </div>
          </div>
          <div className='col-lg-5 mx-sm-2  col-11 my-3'>
            <h3 className='text-center fw-bold' style={{ "color": "var(--letra)", "fontFamily":"Comic Sans MS" }}> Mi trabajo </h3>
            <p className='mt-3 text-center'> Soy desarrollador junior, por eso, trabajo siempre en proyectos que aumenten mi experiencia y valor como profesional. </p>
            <div>
              <Carousel />
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Link to="/about" className="btn btn-outline-dark text-light"> Ver más.. </Link>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row d-flex justify-content-evenly'>
          <div className='rectangulo col-lg-6 ol-md-8 col-sm-10 col-10 p-4 text-white'>
            <p className='fs-5 text-center'> "Fight until the end, because your life will depend on the strength that you have inside you" </p>
          </div>

        </div>

      </div>




      <Pie />
    </div>

  )
}
