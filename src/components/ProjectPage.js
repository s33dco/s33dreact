import React from 'react';

const ProjectPage = (props) =>  (
    <main>
      <h1>this is project {props.match.params.id}</h1>
    </main>
  );

export default ProjectPage;
