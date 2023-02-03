import React from 'react'
import { Link } from 'react-router-dom'
import { Pie } from '../ui/Pie'

export const ContactScreen = () => {
  return (
    <div>
      <div className='banner py-5'>
        <p className='mantenimiento text-light  text-center'>

          Pagina en mantenimiento... :c
        </p>
        <div>

          <Link className='text-light fs-5 mx-5' to="/">
            y- Go back home
          </Link>
        </div>
      </div>
      <Pie />
    </div>

  )
}
