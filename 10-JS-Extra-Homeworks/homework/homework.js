// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  // return Object.entries(objeto);

  var matriz = [];

  for (var propiedad in objeto) {
    matriz.push([propiedad, objeto[propiedad]])
  }
  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var cantidad = {};
  for (var i = 0; i < string.length; i++) {
    if (!cantidad.hasOwnProperty(string[i])) {
      cantidad[string[i]] = 1;
    } else {
      cantidad[string[i]]++;
    }

  } return cantidad;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = '';
  var minuscula = '';
  //[soyHENRY]

  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayuscula = mayuscula + s[i]

    } else {

      minuscula = minuscula + s[i];
    }
  }
  return (mayuscula + minuscula)

}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var palabra = str.split(" ");
  // [ "hola", "amiga"]
  for (var i = 0; i < palabra.length; i++) {

    palabra[i] = palabra[i].split("").reverse().join("");

  }
  return palabra.join(" ");
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna 
  //Escribe tu código aquí

  // var str = numero.toString()
  // var numerossep = str.split("").reverse().join("");

  //   if (str === numerossep) {

  //   return "Es capicua" ;
  //   } else {

  //     return "No es capicua";
  //   }
  var str = numero.toString();
  var numeroinvert = "";

  for (let i = str.length - 1; i >= 0; i--) {
    numeroinvert = numeroinvert + str[i];
  }

  if (str === numeroinvert) {

    return "Es capicua";
  } else {

    return "No es capicua";
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var nvaCadena = "";
  // [abcdef]
  //  i
  for (let i = 0; i < cadena.length; i++) {

    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      nvaCadena += cadena[i];
    }
  }
  return nvaCadena

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //     ["You", "arena", "be", "looking"] 
  //               a       b
  //      -1       0        1
  // quiero ordenar por tama;o de cadena. orden de numero de caracteres de menor a mayor.
  // a > b = 1
  // a < b = -1
  // a = b = 0

  //Escribe tu código aquí

  arr.sort(function (a, b) {

    if (a.length > b.length) {
      return a.length = 1;
    }
    if (a.length < b.length) {
      return a.length = - 1;
    }
    return 0
  });
  return arr;

}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  //quiero comparar 2 arrays diferentes y encontrar los caracteres que sean iguales 
  // creo una variable donde se van a guardar los caracteres iguales enn un nuevo array
  // arr1 = [4,2,3]
  //         i
  // arr2 = [1,3,4]
  //         j
  // hago un for para comparar los 2 arreglos. un for anidado
  var newArr = [];

  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        newArr.push(arreglo1[i]);
      }

    }
  } return newArr;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

