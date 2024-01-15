const fs = require('fs');

let citas = [];
const Registrar = (nombre, edad, tipo, color, enfermedad) => {
  let registro = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };
  citas.push(registro);
  fs.writeFileSync('./citas.json', JSON.stringify(citas));
};

const Leer = () => {
  let data = fs.readFileSync('./citas.json', 'utf8');
  console.log(JSON.parse(data));
};

module.exports = {
  Registrar,
  Leer,
};
