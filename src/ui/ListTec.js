import React from 'react'

export const ListTec = ({ lista }) => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        {
          lista.map((lang) => (
            <div key={lang} className="text-center mx-1 my-1 bg-primary px-2 rounded">
              <span> {lang} </span>
            </div>
          ))
        }
      </div>
    </div>

  )
}
