import React from 'react';

const ProjectPage = (props) =>  (
    <div>
      <h1>this is project {props.match.params.id}</h1>
    </div>
  );

export default ProjectPage;