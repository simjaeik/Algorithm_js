// const nedb = require("nedb");
// import { Datastore } from "../node_modules/nedb/index.js";

const db = {};
export let count = 0;

export const findAll = () => {
  return Object.values(db);
};

export const insert = (input) => {
  db[count] = input;
  count++;
};

export const update = (target, updated) => {
  db[target] = updated;
};

export const remove = (target) => {
  delete db[target];
};
