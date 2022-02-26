const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const fs = require("fs");

// SSR start - Getting and assembling the components and pages on server startup

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const javascriptMastery = fs
  .readFileSync("./public/pages/javascriptMastery.html")
  .toString();

const javascriptMasteryPage =
  nav
    .replace("%%DOCUMENT_TITLE%%", "javascriptMastery")
    .replace("%%JAVASCRIPTMASTERY_ACTIVE%%", "active") +
  javascriptMastery +
  footer;

// SSR end

app.get("/", (req, res) => {
  res.send(javascriptMasteryPage);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
