const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const router = express.Router();

const loginRoute = require("./loginRoute");
const readTodosRoute = require("./readTodosRoute");
const createTodoRoute = require("./createTodoRoute");
const updateTodoRoute = require("./updateTodoRoute");
const deleteTodoRoute = require("./deleteTodoRoute");

//ROUTES********

//login
router.post("/login", loginRoute);
//read and write
router.get("/todos", isLoggedIn, readTodosRoute);
router.post("/todos", isLoggedIn, createTodoRoute);
//update
router.put("/todos/:id", isLoggedIn, updateTodoRoute);
//delete
router.delete("/todos/:id", isLoggedIn, deleteTodoRoute);

module.exports = router;
