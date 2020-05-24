const express = require("express");
const cors = require("cors");
const configMensaje = require("./configMensaje");

const bodyParser = require("body-parser");
const app = express();
app.set("port", 4000);

app.use(bodyParser.json());
app.use(cors());
app.post("/formulario", (req, res) => {
  console.log(req.body);
  configMensaje(req.body);
  res.status(200).send();
});
app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en el servidor", app.get("port"));
});
