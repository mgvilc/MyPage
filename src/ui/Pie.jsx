import React from 'react'

export const Pie = () => {
  return (
    <div className='text-center colorprim p-5'>
      <div className='mx-3 animate__animated animate__fadeIn'>
        <div className='d-flex justify-content-center mt-5'>

          <a className='mx-3' target="_blank" rel="noreferrer noopener" href='https://www.facebook.com/profile.php?id=100010537685724'> <ion-icon name="logo-facebook" color="light" size="large"></ion-icon> </a>

          <a className='mx-3' target="_blank" rel="noreferrer noopener" href='https://wa.link/s1vqkw'> <ion-icon name="logo-whatsapp" color="light" size="large"></ion-icon></a>

          <a className='mx-3' target="_blank" rel="noreferrer noopener" href='https://instagram.com/migguelvc?igshid=NTA5ZTk1NTc='><ion-icon name="logo-instagram" color="light" size="large"></ion-icon></a>

        </div>
      </div>

      <div className='my-3'>
        <span className='text-light'>  © Elaborado en 2023 </span> <br/>
        <span className='text-light text-muted'> Esta página aún esta en desarrollo</span>
      </div>
    </div>
  )
}
