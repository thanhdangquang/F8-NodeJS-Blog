const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const sass = require("sass");

const route = require("./routes/index");

route(app);
app.use(express.static(path.join(__dirname, "public")));
//HTTP logger
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//template engine setup
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
