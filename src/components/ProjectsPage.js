import React from 'react';
import {Link} from 'react-router-dom';

const ProjectsPage = (props) => (
    <div>
      <h3>Projects Page</h3>
      <Link to='/projects/project-one'>Project One</Link>
      <Link to='/projects/project-two'>Project Two</Link>
      <Link to='/projects/project-three'>Project Three</Link>   
    </div>

  )

export default ProjectsPage;