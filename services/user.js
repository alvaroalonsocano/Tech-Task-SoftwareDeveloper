// services/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Ruta GET para obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta POST para crear un nuevo usuario
router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta PUT para actualizar un usuario existente
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta DELETE para eliminar un usuario
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
