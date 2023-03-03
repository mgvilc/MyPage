import React from 'react'

export const ListTec = ({ lista }) => {
  return (
    <div className='container'>
      <div className='d-flex row justify-content-center'>
        {
          lista.map((lang) => (
            <div key={lang} className="col-5 col-sm-5 col-lg-2 text-center mx-1 my-1 bg-primary px-2 rounded">
              <span> {lang} </span>
            </div>
          ))
        }
      </div>
    </div>

  )
}
