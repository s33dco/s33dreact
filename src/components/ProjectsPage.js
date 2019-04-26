import React from "react"
import { Link } from "react-router-dom"

const ProjectsPage = props => (
	<main>
		<h3>Projects Page</h3>
		<div class='project'>
			<Link to='/projects/project-one'>Project One</Link>
		</div>
		<div class='project'>
			<Link to='/projects/project-two'>Project Two</Link>
		</div>
		<div class='project'>
			<Link to='/projects/project-three'>Project Three</Link>
		</div>
	</main>
)

export default ProjectsPage
