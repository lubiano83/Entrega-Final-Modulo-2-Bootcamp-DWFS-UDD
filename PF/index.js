// Variables
let countTrue = 0;
let countFalse = 0;
const preguntaRealizada = [];
const respuestasUsuario = [];

// Preguntas iniciales
const preguntas = [
  {
    pregunta: "¿Cuál de los siguientes métodos se usa para recorrer un array en JavaScript?",
    respuestas: ["forEach", "map", "filter", "Todas las anteriores"],
    respuestaCorrecta: "Todas las anteriores"
  },
  {
    pregunta: "¿Qué función se usa para convertir un string en un número entero en JavaScript?",
    respuestas: ["parseFloat", "parseInt", "Number", "toFixed"],
    respuestaCorrecta: "parseInt"
  },
  {
    pregunta: "¿Cuál es el resultado de `typeof null` en JavaScript?",
    respuestas: ["null", "object", "undefined", "number"],
    respuestaCorrecta: "object"
  },
  {
    pregunta: "¿Cuál de estos no es un tipo de dato en JavaScript?",
    respuestas: ["String", "Boolean", "Float", "Symbol"],
    respuestaCorrecta: "Float"
  },
  {
    pregunta: "¿Qué palabra clave se usa para declarar una variable que no puede ser reasignada?",
    respuestas: ["var", "let", "const", "static"],
    respuestaCorrecta: "const"
  },
  {
    pregunta: "¿Cuál es el operador de comparación estricta en JavaScript?",
    respuestas: ["==", "!=", "===", "!=="],
    respuestaCorrecta: "==="
  },
  {
    pregunta: "¿Cómo se define una función en JavaScript?",
    respuestas: [
      "function miFuncion() {}",
      "const miFuncion = function() {}",
      "const miFuncion = () => {}",
      "Todas las anteriores"
    ],
    respuestaCorrecta: "Todas las anteriores"
  }
];

// Crear una pregunta
const crearPregunta = (pregunta, respuestas, respuestaCorrecta) => {
  try {
    if (!pregunta || respuestas.length === 0 || !respuestaCorrecta) return console.log("Todos los campos son necesarios");
    if (typeof pregunta !== "string" || typeof respuestaCorrecta !== "string" || !Array.isArray(respuestas)) return console.log("Los campos deben tener el formato correcto");
    const preguntaData = { pregunta, respuestas, respuestaCorrecta };
    preguntas.push(preguntaData);
  } catch (error) {
    console.log(error.message);
  }
};

// Consultar preguntas
const consultarPreguntas = function() {
  try {
    if (preguntas.length === 0) document.getElementById("output").innerHTML = "<h3>No hay preguntas disponibles...</h3>"
    let pregunta = [];
    for( let i = 0; i < preguntas.length; i++ ) {
      pregunta.push(`${i+1}.- ${preguntas[i].pregunta}`);
    }
    document.getElementById("output").innerHTML = pregunta.join("<br>");
  } catch (error) {
    console.log(error.message);
  }
};

// Ver respuestas
const verRespuestas = () => {
  try {
    const numeroPregunta = parseInt(prompt("Ingresa el numero de la pregunta"));
    if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
    const leerRespuestas = preguntas[numeroPregunta - 1].respuestas;
    let respuesta = [];
    for( let i = 0; i < leerRespuestas.length; i++ ) {
      respuesta.push(` ${i+1}.- ${preguntas[numeroPregunta - 1].respuestas[i]}`);
    }
    alert(respuesta)
  } catch (error) {
    console.log(error.message);
  }
};

// Responder una pregunta
const responderPregunta = () => {
  try {
    const numeroPregunta = parseInt(prompt("Ingrese el numero de la pregunta"));
    const existePregunta = preguntaRealizada.some(num => num === numeroPregunta);
    if(existePregunta) return alert("Lo siento, esa pregunta ya se realizo..");
    if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
    const numeroRespuesta = parseInt(prompt("Ingrese el numero de la respuesta"));
    if(!numeroRespuesta || typeof numeroRespuesta !== "number" || numeroRespuesta < 1 || numeroRespuesta > preguntas[numeroPregunta - 1].respuestas.length) return alert(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas[numeroPregunta - 1].respuestas.length}`);
    const respuestaCorecta = preguntas[numeroPregunta - 1].respuestaCorrecta;
    const respuestaUsuario = preguntas[numeroPregunta - 1].respuestas[numeroRespuesta - 1];
    if(respuestaCorecta === respuestaUsuario) {
      countTrue++;
      alert(`¡Felicitaciones! La respuesta a la pregunta: ${numeroPregunta}, es correcta.`);
    } else {
      countFalse++;
      alert(`Lo siento, la respuesta a la pregunta: ${numeroPregunta}, es incorrecta..`);
    }
    preguntaRealizada.push(numeroPregunta);
    respuestasUsuario.push(respuestaUsuario);
  } catch (error) {
    console.log(error.message);
  }
};

// Mostrar resultados de respuestas
const mostrarResultadoRespuestas = () => {
  try {
    alert(`Hubo un total de ${countTrue} respuestas correctas y ${countFalse} de respuestas incorrectas, de un total de ${preguntas.length} preguntas..`);
  if(preguntas.length === preguntaRealizada.length) {
    if(countTrue === preguntas.length) alert("Felicitaciones, eres un genio!!");
    if(countTrue > (preguntas.length / 2) && countTrue < preguntas.length) alert("Felicitaciones, aprobaste el examen!!");
    if(countTrue <= (preguntas.length / 2)) alert("Lo siento, acabas de reprobar el examen..");
  }
  } catch (error) {
    console.log(error.message);
  }
};

// Mostrar las respuestas emitidas
const mostrarRespuestasUsuario = () => {
  try {
    let respuesta = [];
    for( let i = 0; i < respuestasUsuario.length; i++ ) {
      respuesta.push(` ${i+1}.- ${respuestasUsuario[i]}`);
    }
    if(respuesta.length === 0) return alert("Aun no respondes ninguna pregunta..");
    alert(respuesta);
  } catch (error) {
    console.log(error.message);
  }
};

// Crear una nueva pregunta
crearPregunta("¿Cuál de estas afirmaciones sobre `let` y `var` es correcta?", ["`let` tiene un alcance de bloque, mientras que `var` tiene un alcance de función", "`var` y `let` tienen el mismo alcance", "`let` permite redeclarar una variable en el mismo ámbito", "`var` no permite hoisting"], "`let` tiene un alcance de bloque, mientras que `var` tiene un alcance de función");

// Consultar las preguntas disponibles
consultarPreguntas();

// Conexion con HTML
document.getElementById("verRespuestas").addEventListener("click", () => verRespuestas());
document.getElementById("responderPregunta").addEventListener("click", () => responderPregunta());
document.getElementById("resultadoRespuestas").addEventListener("click", () => mostrarResultadoRespuestas());
document.getElementById("respuestasUsuario").addEventListener("click", () => mostrarRespuestasUsuario());