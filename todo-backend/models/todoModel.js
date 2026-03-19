// models/todoModel.js
const db = require("../config/db");

exports.getAllTodos = (cb)=>{
 db.query("SELECT * FROM todos ORDER BY id DESC",cb);
};

exports.addTodo = (text,cb)=>{
 db.query("INSERT INTO todos (text) VALUES (?)",[text],cb);
};

exports.updateTodo = (id,data,cb)=>{
 db.query(
  "UPDATE todos SET text=?, isCompleted=? WHERE id=?",
  [data.text, data.isCompleted, id],
  cb
 );
};

exports.deleteTodo = (id,cb)=>{
 db.query("DELETE FROM todos WHERE id=?",[id],cb);
};

exports.findByText = (text,cb)=>{
 db.query(
  "SELECT * FROM todos WHERE LOWER(text)=LOWER(?)",
  [text],
  cb
 );
};