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
 console.log(buscoInterseccion([4,2,3,7,3,4,1], [1,3,4]));
