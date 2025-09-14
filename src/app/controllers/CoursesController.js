const Course = require('../models/Course');
console.log(require('../../util/mongoose'));
const {mongooseToObject} = require('../../util/mongoose');

class CoursesController {
//[GET] /courses/:slug
   show(req, res,next) {
      Course.findOne({slug: req.params.slug})
      .then(course => {
         res.render('courses/show',{course: mongooseToObject(course)});
      })
      .catch(err => next(err));
   }

   //[GET] /courses/create
   create(req, res, next) {
      res.render('courses/create');
   }

   //POST /courses/store
   store(req, res, next) {
      const formData=req.body;
      formData.img=`https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
      const course=new Course(formData);
    course.save()
   .then(() => res.redirect('/'))
   .catch(error => {
  console.error(error);
  res.status(500).render("errors/errorCreate", { message: error.message },);
});
   }
}

module.exports = new CoursesController();
