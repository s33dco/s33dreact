import React from 'react'
import ProjectItem from './ProjectItem'

export const ProjectList = props => (
	<div className='projectLists'>
		{props.projects.length === 0 ? (
			<p>No Projects</p>
		) : (
			props.projects.map(project => {
				return <ProjectItem key={project.id} {...project} />
			})
		)}
	</div>
)

export default ProjectList
