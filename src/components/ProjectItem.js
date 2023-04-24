import React from "react";

function ProjectItem(props) {
  const technologies = props.technologies.map((technology, index) => (
    <span key={index}>{technology}</span>
  ));

  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>{technologies}</div>
      <a href={props.liveUrl}>Live</a>
      <a href={props.sourceUrl}>Source</a>
    </li>
  );
}

export default ProjectItem;
