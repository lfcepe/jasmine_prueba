const usuarios = require('../models/usuario');

function obtenerUsuarioPorId(id) {
  return usuarios.find(usuario => usuario.id === id);
}

function obtenerUsuarioPorNombre(nombre) {
  return usuarios.find(usuario => usuario.nombre === nombre);
}

module.exports = { obtenerUsuarioPorId, obtenerUsuarioPorNombre };
