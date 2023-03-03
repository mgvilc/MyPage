import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'



export const Sphere = () => {

    useEffect(() => {

        const container = ".tagcloud"
        const texts = ["HTML", "React", "JavaScript", "CSS", "MySQL", "Node", "Express", "SQLServer", "Android\nStudio", "Kotlin", "GitHub"]

        const options = {
            radius: 140,
            maxSpeed: "normal",
            initSpeed: "fast",
            keep: true 
        }
        TagCloud(container, texts, options)
      
    }, [])
    
  return (
    <div className='containersphere px-2 text-center'>
        <span className='tagcloud'></span>
    </div>
  )
}
