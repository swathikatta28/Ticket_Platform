const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Create a new ticket
router.post("/", (req, res) => {
  const { title, description } = req.body;
  db.query("INSERT INTO tickets (title, description) VALUES (?, ?)", 
    [title, description], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: "Ticket created", id: result.insertId });
    }
  );
});

// Get all tickets
router.get("/", (req, res) => {
  db.query("SELECT * FROM tickets", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Update a ticket status
router.put("/:id", (req, res) => {
  const { status } = req.body;
  db.query("UPDATE tickets SET status = ? WHERE id = ?", 
    [status, req.params.id], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Ticket updated" });
    }
  );
});

// Delete a ticket
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM tickets WHERE id = ?", [req.params.id], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Ticket deleted" });
    }
  );
});

module.exports = router;
