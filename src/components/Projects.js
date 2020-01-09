import React from 'react';
import PROJECTS from '../data/projects';

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

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {PROJECTS.map(PROJECT => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
);

export default Projects;
