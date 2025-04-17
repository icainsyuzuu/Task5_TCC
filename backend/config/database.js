import { Sequelize } from "sequelize";
const db = new Sequelize("note", "root", "", {
  host: "34.46.192.156",
  dialect: "mysql",
});

export default db;
