const {Registrar, Leer} = require('./operaciones')

/*
console.log('Hola mundo!');
Registrar('Gato', 2, 'Macho', 'Cafe', 'Enfermedad');
Registrar('Gato', 3, 'Macho', 'Cafe', 'Enfermedad');

Leer();*/

const argumentos = process.argv.slice(2);
argumentos.forEach((element, index) => {
    console.log(index, element);
})
const operacion = argumentos[0];
console.log(argumentos[0]);
//console.log(operacion, argumentos);

if(operacion === 'registrar'){
    Registrar(argumentos[0], argumentos[1], argumentos[2], argumentos[3], argumentos[4]);
}else if(operacion === 'leer'){
    Leer();
}


