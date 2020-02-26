let Skill = require('../models/skill');



module.exports = {
    index,
    show
}

function index(req, res, next) {
    res.render('skills/index', {
      skills: Skill.getAll()
    })
}

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    })
}