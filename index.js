const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const ticketRoutes = require("./routes/tickets");
app.use("/api/tickets", ticketRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
