const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project } = require('../models');

// GET all projects for homepage
router.get('/', async (req, res) => {
  try {
    console.log("Hi");
    const dbProjectData = await Project.findAll({
      
    });

    const projects = dbProjectData.map((project) =>
      project.get({ plain: true })
    );
console.log(projects);
    res.render('homepage', {
      projects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;