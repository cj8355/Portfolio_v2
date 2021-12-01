const router = require('express').Router();
const { Project } = require('../../models');
const sequelize = require('../../config/connection');

// get all projects in the database
router.get('/', (req, res) => {
    console.log('======================');
    Project.findAll({
        attributes: [
            'id',
            'title',
            'img_name',
            'deployed_link',
            'repo_link'
        ],
      
    })
      .then(dbProjectData => res.json(dbProjectData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  module.exports = router;