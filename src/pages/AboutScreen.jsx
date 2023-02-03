import React, { useContext } from 'react'
import { userContext } from '../router/AppRouter'
import { NavAbout } from '../ui/NavAbout'
import { MyProjects } from './MyProjects'
import { MySkills } from './MySkills'

export const AboutScreen = () => {
  const {fProject} = useContext(userContext)
  return (

    <div className='bannerAbout'>
      <div className='row m-0'>
        <div className='col-md-5 col-sm-12 colorprim'>
            <NavAbout />
        </div>
        <div className='col-md-7 col-sm-12'>
          {
            (fProject)
            ? <MyProjects />
            : <MySkills />
          }
        </div>
      </div>

    </div>

  )
}
