const controlador = require('../controllers/usuarioController');

describe('Controlador de Usuario', () => {
  it('Tiene que devolver el usuario Ana por ID', () => {
    const usuario = controlador.obtenerUsuarioPorId(1);
    expect(usuario).toEqual({ id: 1, nombre: 'Ana' });
  });

  it('Tiene que devolver el usuario Felipe por ID', () => {
    const usuario = controlador.obtenerUsuarioPorId(3);
    expect(usuario).toEqual({ id: 3, nombre: 'Felipe' });
  });

  it('Tiene que devolver el usuario Dilan por el nombre', () => {
    const nombre = 'Dilan';
    const usuario = controlador.obtenerUsuarioPorNombre(nombre);
    expect(usuario).toEqual({ id: 4, nombre: 'Dilan' });
  });

  it('Tiene que devolver undefined si el usuario no existe', () => {
    const usuario = controlador.obtenerUsuarioPorId(99);
    expect(usuario).toBeUndefined();
  });
});