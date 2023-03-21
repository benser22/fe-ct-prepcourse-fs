/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   var propiedades = Object.keys(objeto);
   var valores = Object.values(objeto);
   for (var i=0; i < propiedades.length; i++){
      arreglo[i] = [propiedades[i], valores[i]];
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var repetidos = {};
   var arreglo = [];
   for (i=0; i<string.length; i++){
      arreglo[i]= string.charAt(i);
   }
   arreglo.forEach(function(numero){
      repetidos[numero] = (repetidos[numero] || 0) + 1;
   });
   return repetidos;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var Mayu = "";
   var Minu = "";
   for (i=0; i<string.length; i++){
      if (string.charAt(i) === string.charAt(i).toUpperCase()){
         Mayu = Mayu + string.charAt(i);
      } else {
         Minu = Minu + string.charAt(i);
      }
   }
   return Mayu + Minu;
}

function asAmirror(string) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var espejo = "";
   var palabra = [];
   for (var i=string.length-1; i>=0; i--){
      if (string.charAt(i) != " "){
         espejo = espejo + string.charAt(i);
      } else {
         palabra.push(espejo);
         espejo = "";
      }
   }
   palabra.push(espejo);
   espejo = "";
   for (i=palabra.length-1; i>= 0; i--){
      espejo = espejo + palabra[i];
      if (i != 0)
      {espejo = espejo + " ";}
   }
   return espejo;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string = numero.toString ();
   var espejo = "";
      var palabra = [];
      for (var i=string.length-1; i>=0; i--){
            espejo = espejo + string.charAt(i);
         }
      palabra.push(espejo);
      espejo = "";
      for (i=palabra.length-1; i>= 0; i--){
         espejo = espejo + palabra[i];
      }
      if (espejo === numero.toString()){
         return "Es capicua";
      } else {
         return "No es capicua";
      }
}
   

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var palabra = "";
   for (var i=0; i<string.length; i++){
      if (string.charAt(i) != "a" && string.charAt(i) != "b" && string.charAt(i) != "c") {
         palabra = palabra + string.charAt(i);
      }
   }
   return palabra;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var bandera = 0;
   var aux = "";
   var i=0;
   do {
      if (arrayOfStrings[i+1].length < arrayOfStrings[i].length){
         aux = arrayOfStrings[i];
         arrayOfStrings[i] = arrayOfStrings[i+1];
         arrayOfStrings[i+1]=aux;
         bandera = 0;
         i = 0;
      } else {
         bandera = 1;
      }
      i++;
   }   while (i<arrayOfStrings.length-1);
   return arrayOfStrings;
};
   

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var arreglo = [];
   var j = 0;
   var k = 0;
   for (i=0; i<array1.length; i++){
      
      do {
         if (array1[i]==array2[j]){
            arreglo[k] = array1[i];
            k++;
         } 
         j++;
      } while (j<array2.length);

      j = 0;
   }  
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
