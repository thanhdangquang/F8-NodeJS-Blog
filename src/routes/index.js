const newsRouter = require('./news');
const siteRouter = require('./site');
const CoursesRouter = require('./Courses');
function route(app) {
   app.use('/news', newsRouter);
   app.use('/', siteRouter);
   app.use('/courses', CoursesRouter);
}

module.exports = route;
