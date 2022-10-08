// importando el paquete que descargue
const express = require("express");

// app==EXPRESS que fue el paquete que descargue
const app = express();

// atendiendo peticiones
app.get("/api/hoteles/habitaciones", function (req, res) {
  res.send("Hello World");
});

app.post("/api/hoteles/habitaciones", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("que chimba sog");
});
