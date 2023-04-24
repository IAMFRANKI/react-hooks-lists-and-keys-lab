import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  const projects = props.projects.map((projects) => (
    <ProjectItem
      key={project.id}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
      liveUrl={project.liveUrl}
      sourceUrl={project.sourceUrl}
    />
  ));

  return <ul>{projects}</ul>;
} 
    

export default ProjectList;
