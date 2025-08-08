#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_name VARCHAR ( 50 )
);

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  item_name VARCHAR ( 50 ),
  item_qty INTEGER,
  category_id INTEGER
);

INSERT INTO categories (category_name)
VALUES ('produce'), ('electronics');

INSERT INTO items (item_name, item_qty, category_id)
VALUES ('apple', 5, 1), ('banana', 9, 1), ('57 inch tv', 7, 2), ('switch 2', 5, 2);
 `;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();