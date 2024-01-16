const fs = require('fs');

const Registrar = (nombre, edad, tipo, color, enfermedad) => {
  let citas = [];
  if (fs.existsSync('./citas.json')) {
    let data = fs.readFileSync('./citas.json', 'utf8');
    citas = JSON.parse(data);
  }

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
  if (fs.existsSync('./citas.json')) {
    let data = fs.readFileSync('./citas.json', 'utf8');
    citas = JSON.parse(data);
    if (citas.length == 0) {
      console.log('No hay registros en el archivo citas.json');
    } else {
      console.log(citas);
    }
  } else {
    console.log('No existe el archivo citas.json');
  }
};

module.exports = {
  Registrar,
  Leer,
};
