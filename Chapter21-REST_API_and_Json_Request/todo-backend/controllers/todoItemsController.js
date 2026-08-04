const TodoItem = require('../models/todoItem');

exports.createTodoItem = async (req, res) => {
      console.log(req.body);
  try {
    const { task, date, completed } = req.body;
    const todoItem = await TodoItem.create({ task, date, completed });
    res.status(201).json(todoItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllTodoItems = async (req, res) => {
  try {
    const todoItems = await TodoItem.find();
    res.status(200).json(todoItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const todoItem = await TodoItem.findByIdAndUpdate(
      id,
      { completed },
      { new: true } // updated document return karega
    );
    if (!todoItem) {
      return res.status(404).json({ message: 'Todo item not found' });
    }
    res.status(200).json(todoItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTodoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const todoItem = await TodoItem.findByIdAndDelete(id);
    if (!todoItem) {
      return res.status(404).json({ message: 'Todo item not found' });
    }
    res.status(200).json({ message: 'Todo item deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};