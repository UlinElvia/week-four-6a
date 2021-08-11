// ******************************* 
// COMIENCE AQUÍ SI QUIERE UN PUNTO DE INICIO MÁS FÁCIL PARA ESTA ASIGNACIÓN
// *******************************
//
// Instrucciones de asignación del módulo 4.
//
// La idea de esta asignación es tomar una matriz existente de nombres
// y luego envíe Hello 'Name' o Good Bye 'Name' a la consola.
// El programa debe decir "Hola" a cualquier nombre excepto a los que comienzan con una "J"
// o "j", de lo contrario, el programa debería decir "Adiós". Entonces, el resultado final
// en la consola debería verse así:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!
*/

// PASO 1: (NADA QUE HACER. YA HECHO PARA USTED)
// Envuelve todo el contenido de script.js dentro de un IIFE
// Ver Clase 52, parte 2
// (Tenga en cuenta que el paso 2 se realizará en el archivo SpeakHello.js).
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// PASO 10: (NADA QUE HACER. YA HECHO PARA USTED)
// Recorre la matriz de nombres y di "Hola" o "Adiós"
// usando el método 'hablar' de helloSpeaker o de byeSpeaker.
// Ver Clase 50, parte 1
for (var i = 0; i < names.length; i++) {

  // PASO 11: (NADA QUE HACER. YA HECHO PARA USTED)
  // Recupera la primera letra del nombre actual en el bucle.
  // Usa la función 'charAt' del objeto string. Ya que estamos buscando
  // nombres que comienzan con mayúscula o minúscula 'J' / 'j', call
  // método de cadena del objeto 'toLowerCase' en el resultado para que podamos comparar
  // al carácter en minúscula 'j' después.
  // Busque estos métodos en el sitio web de Mozilla Developer Network si es necesario.
  var firstLetter = names[i].charAt(0).toLowerCase();

  // PASO 12: (NADA QUE HACER. YA HECHO PARA USTED)
  // Compare la 'primera letra' recuperada en el PASO 11 con minúsculas
  // 'j'. Si es el mismo, llame al método 'speak' de byeSpeaker con el nombre actual
  // en el lazo. De lo contrario, llame al método 'hablar' de helloSpeaker con el
  // nombre en el bucle.
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();