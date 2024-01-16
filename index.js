const { Registrar, Leer } = require('./operaciones');

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === 'registrar') {
  if (argumentos.length < 6) {
    console.log('Faltan argumentos');
    return;
  }
  Registrar(
    argumentos[1],
    argumentos[2],
    argumentos[3],
    argumentos[4],
    argumentos[5]
  );
} else if (operacion === 'leer') {
  Leer();
}
