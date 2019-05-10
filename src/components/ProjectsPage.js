import React from 'react'
import ProjectList from './ProjectList'
import projects from '../data/projects'

const ProjectsPage = props => (
	<main>
		<h1>Here's some we prepared earlier...</h1>
		<ProjectList projects={projects} />
	</main>
)

export default ProjectsPage
