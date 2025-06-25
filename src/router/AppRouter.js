import React, { createContext, useState } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom"
import { ContactScreen } from '../pages/ContactScreen'
import { HomeScreen } from '../pages/HomeScreen'
import { MyProjects } from '../pages/MyProjects'
import { MySkills } from '../pages/MySkills'

export const userContext = createContext()

export const AppRouter = () => {
    const [fProject, setFProject] = useState(false)
    const [fSkill, setFSkill] = useState(false)
    return (

        <HashRouter>
            <div>
                <userContext.Provider value={{ fProject, setFProject, fSkill, setFSkill }}>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path='/contact' element={<ContactScreen />} />
                        <Route path="/skills" element={<MySkills />} />
                        <Route path="/projects" element={<MyProjects />} />
                    </Routes>
                </userContext.Provider>
            </div>
        </HashRouter>

    )
}
