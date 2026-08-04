const express = require('express');
const todoItemsRouter = express.Router();

//local Modules
const todoItemsController = require('../controllers/todoItemsController');

todoItemsRouter.get('/', todoItemsController.getAllTodoItems);
todoItemsRouter.post('/', todoItemsController.createTodoItem);
todoItemsRouter.put('/:id/completed', todoItemsController.markCompleted);
todoItemsRouter.delete('/:id', todoItemsController.deleteTodoItem);

module.exports = todoItemsRouter; 