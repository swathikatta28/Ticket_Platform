const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));

sequelize.sync().then(() => console.log("DB Synced"));

app.listen(5000, () => console.log("Server running on port 5000"));
