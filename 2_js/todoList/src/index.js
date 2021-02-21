import { count, findAll, insert, update, remove } from "./db.js";

const todoList = document.getElementById("todoList");

const addList = () => {
  const value = document.getElementById("input").value;
  insert(value);

  const list = document.createElement("li");
  list.id = count;

  const content = document.createElement("span");
  content.nodeValue = value;

  const close = document.createElement("button");
  close.nodeValue = "X";
  close.addEventListener("click", () => {
    remove(count);
  });

  const update = document.createElement("button");
  update.nodeValue = "Up";

  list.appendChild(content);
  list.appendChild(close);
  list.appendChild(update);

  todoList.appendChild(list);
};

document.getElementById("button").addEventListener("click", () => {
  addList();
});
