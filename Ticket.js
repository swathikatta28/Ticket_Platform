const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Ticket = sequelize.define("Ticket", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.ENUM("Open", "In Progress", "Closed"), defaultValue: "Open" },
});

Ticket.belongsTo(User, { foreignKey: "user_id" });

module.exports = Ticket;
