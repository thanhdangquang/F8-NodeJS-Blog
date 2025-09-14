const Course = require('../models/Course');
const {MultipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
   async index(req, res, next) {
      //[GET] /home
      Course.find({})
         .then(courses => {
           
            res.render('home', { courses: MultipleMongooseToObject(courses) });
         })
         .catch(next);
   }

   search(req, res) {
      res.render('search');
   }
  
}

module.exports = new SiteController();
