import React from 'react'
import { dataProjects } from './data/dataProjects'
import ProjectCard from './ProjectCard'

const RorPortfolio = () => {
  return (
    <div className='d-flex flex-wrap justify-content-between align-items-center mx-3 my-3 gap-3'>
        {dataProjects.map((project) => 
            <ProjectCard key={project.id} project={project} />
        )}
    </div>
  )
}

export default RorPortfolio