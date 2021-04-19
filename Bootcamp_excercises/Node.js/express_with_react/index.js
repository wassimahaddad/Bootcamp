const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./users.json");

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.send(data);
});

app.post("/api/form", (req, res) => {
  const { formValues } = req.body;
  res.send("coming from the backend" + "" + formValues);
  console.log(formValues);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening");
});
