const { Project } = require('../models');

const projectData = [
  {
    title: 'Local (Project 1)',
    img_name: 'local.JPG',
    deployed_link: 'https://ericdavidanderson.github.io/Local/',
    repo_link: 'https://github.com/ericdavidanderson/Local.git'
  },
  {
    title: 'Work Day Planner',
    img_name: 'workDayPlanner.JPG',
    deployed_link: 'https://cj8355.github.io/Work-Day-Planner/',
    repo_link: 'https://github.com/cj8355/Work-Day-Planner.git'
  },
  {
    title: 'Code quiz',
    img_name: 'codeQuiz.JPG',
    deployed_link: 'https://cj8355.github.io/Code_Quiz/',
    repo_link: 'https://github.com/cj8355/Code_Quiz.git'
  },
  
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;