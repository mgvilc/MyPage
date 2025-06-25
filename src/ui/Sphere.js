import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'



export const Sphere = () => {
  useEffect(() => {
    const container = ".tagcloud"
    const texts = ["Angular", "C# .NET", "MySQL", "NodeJS", "Auth0", "SQLServer", "TailwindCSS", "Azure DevOps"]

    const options = {
      radius: 160,
      maxSpeed: "normal",
      initSpeed: "fast",
      keep: true
    }
    const tagCloudInstance = TagCloud(container, texts, options);

    return () => {
      tagCloudInstance.destroy();
    };

  }, [])

  return (
    <div className='containersphere px-2 text-center'>
      <span className='tagcloud'></span>
    </div>
  )
}
