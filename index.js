import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8989;

// parse url encoded data in the html body
app.use(bodyParser.urlencoded({ extended: true }));

// routing logic
app.get("/", (_req, res) => {
  res.render("index.ejs"); 
});

app.post("/submit", (req, res) => {
  console.log("Name submitted...");
  console.log(req.body);
  const letters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { letterCount: letters });  // send the var to index.ejs
});

// Error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => { console.log(`Server running on port ${port}`); });
