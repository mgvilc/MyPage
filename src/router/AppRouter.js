import React, { createContext, useState } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom"
import { ContactScreen } from '../pages/ContactScreen'
import { HomeScreen } from '../pages/HomeScreen'
import { MyProjects } from '../pages/MyProjects'
import { MySkills } from '../pages/MySkills'
import { NavBarSide } from '../ui/NavBarSide'

export const userContext = createContext()

export const AppRouter = () => {
    const [fProject, setFProject] = useState(false)
    const [fSkill, setFSkill] = useState(false)
    return (

        <HashRouter>
            <div className='banner'>
                <div className=''>
                    <div className='row m-0'>
                        <div className='col-lg-2 col-sm-1 col-md-2 col-2 min-vh-100 bg-dark '>
                            <NavBarSide />
                        </div>
                        <div className='col-lg-10 col-sm-11 col-md-10 col-10'>
                            <userContext.Provider value={{ fProject, setFProject, fSkill, setFSkill }}>
                                <Routes>
                                    <Route path="/" element={<HomeScreen />} />
                                    <Route path='/contact' element={<ContactScreen />} />
                                    <Route path="/skills" element={<MySkills />} />
                                    <Route path="/projects" element={<MyProjects />} />
                                </Routes>
                            </userContext.Provider>
                        </div>

                    </div>
                </div>
            </div>


        </HashRouter>

    )
}
