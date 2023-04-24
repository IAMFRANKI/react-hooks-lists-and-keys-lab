import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://www.example.com/project1',
    sourceUrl: 'https://github.com/user/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: ['Vue.js', 'Firebase'],
    liveUrl: 'https://www.example.com/project2',
    sourceUrl: 'https://github.com/user/project2',
  },
  // add more projects here
];

function App() {
  return (
    <div>
       <NavBar links={['home', 'about', 'contact']} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
