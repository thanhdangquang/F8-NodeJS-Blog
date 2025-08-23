class NewsController {
  index(req, res) {
    res.render("news");
  }
  showA(req, res) {
    res.send("NEWS DETAIL");
  }
}

module.exports = new NewsController();
