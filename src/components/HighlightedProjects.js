import React from 'react';
import HIGHLIGHTEDPROJECTS, { projectTitle } from '../data/highlightedProjects';

const Project = props => {
  const { title, image, description, link, git_link } = props.project;

  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <a href={link} target='_blank'>
        <img
          src={image}
          alt={description}
          style={{ width: 200, height: 120 }}
        />
      </a>
      <p>{description}</p>
      <a href={git_link} target='_black'>
        https://GithubLink
      </a>
    </div>
  );
};

const HighlightedProjects = () => (
  <div>
    <h2>{ projectTitle }</h2>
    <div>
      {HIGHLIGHTEDPROJECTS.map(PROJECT => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
);

export default HighlightedProjects;
