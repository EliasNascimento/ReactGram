require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;
const app = express();

//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Solve Cors
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

//upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
require("./config/db.js");

// test route
app.get("/", (req, res) => {
  res.send("API Working!");
});

//routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`);
});
