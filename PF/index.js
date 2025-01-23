let countTrue = 0;
let countFalse = 0;
const respuestasUsuario = [];

// Preguntas iniciales
const preguntas = [
  {
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    respuestas: ["Júpiter", "Saturno", "Neptuno", "Urano"],
    respuestaCorrecta: "Júpiter"
  },
  {
    pregunta: "¿En qué año llegó el hombre a la Luna?",
    respuestas: ["1969", "1975", "1963", "1970"],
    respuestaCorrecta: "1969"
  },
  {
    pregunta: "¿Cuál es el lenguaje de programación más utilizado en el mundo?",
    respuestas: ["Python", "JavaScript", "C++", "Java"],
    respuestaCorrecta: "JavaScript"
  },
  {
    pregunta: "¿Cuántos colores hay en el arcoíris?",
    respuestas: ["7", "5", "6", "8"],
    respuestaCorrecta: "7"
  },
  {
    pregunta: "¿Quién pintó la Mona Lisa?",
    respuestas: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    respuestaCorrecta: "Leonardo da Vinci"
  },
  {
    pregunta: "¿Cuál es el animal terrestre más rápido?",
    respuestas: ["Guepardo", "León", "Antílope", "Caballo"],
    respuestaCorrecta: "Guepardo"
  },
  {
    pregunta: "¿Qué país tiene la mayor población del mundo?",
    respuestas: ["India", "Estados Unidos", "China", "Rusia"],
    respuestaCorrecta: "China"
  },
];

// Función para normalizar texto: convierte a minúsculas y elimina tildes/espacios
function normalizarTexto(texto) {
  try {
    return texto
      .toLowerCase()
      .normalize("NFD") // Descompone caracteres con tildes
      .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos (tildes)
      .trim(); // Elimina espacios adicionales
  } catch (error) {
    console.log(error.message);
  }
};

// Crear una pregunta
const crearPregunta = (pregunta, respuestas, respuestaCorrecta) => {
  try {
    if (!pregunta || !respuestas || !respuestaCorrecta) return console.log("Todos los campos son necesarios");
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
    for( let i = 0; i < preguntas.length; i++ ) {
      console.log(`${i+1}.-`, preguntas[i].pregunta);
    }
  } catch (error) {
    console.log(error.message);
  }
};

// Ver respuestas
const verRespuestas = (numeroPregunta) => {
  try {
    if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
    const leerPregunta = preguntas[numeroPregunta - 1].pregunta;
    const leerRespuestas = preguntas[numeroPregunta - 1].respuestas;
    console.log(leerPregunta);
    for( let i = 0; i < leerRespuestas.length; i++ ) {
        console.log(`${i+1}.-`, preguntas[numeroPregunta - 1].respuestas[i]);
    }
  } catch (error) {
      console.log(error.message);
  }
};

// Responder una pregunta
const responderPregunta = (numeroPregunta, numeroRespuesta) => {
  try {
    if(!numeroRespuesta || typeof numeroRespuesta !== "number" || numeroRespuesta < 1 || numeroRespuesta > preguntas.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas[numeroPregunta - 1].respuestas.length}..`);
    if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
    const respuestaCorecta = preguntas[numeroPregunta - 1].respuestaCorrecta;
    const respuestaUsuario = preguntas[numeroPregunta - 1].respuestas[numeroRespuesta - 1];
    if(respuestaCorecta === respuestaUsuario) {
        countTrue++;
        console.log(`¡Felicitaciones! La respuesta a la pregunta: ${numeroPregunta}, es correcta.`);
    } else {
        countFalse++;
        console.log(`Lo siento, la respuesta a la pregunta: ${numeroPregunta}, es incorrecta..`);
    }
    respuestasUsuario.push(respuestaUsuario);
  } catch (error) {
      console.log(error.message);
  }
};

// Mostrar resultados de respuestas
const mostrarResultadoRespuestas = () => {
  try {
    console.log(`Hubo un total de ${countTrue} respuestas correctas y ${countFalse} de respuestas incorrectas, de un total de ${preguntas.length} preguntas..`);
  } catch (error) {
      console.log(error.message);
  }
};

// Mostrar las respuestas emitidas
const mostrarRespuestasUsuario = () => {
  try {
      console.log(respuestasUsuario);
  } catch (error) {
      console.log(error.message);
  }
};

// Crear una nueva pregunta
crearPregunta("¿En qué continente está Egipto?", ["África", "Asia", "Europa", "América"], "África");

// Consultar las preguntas disponibles
consultarPreguntas();

// Ver respuestas de una pregunta específica y responder
verRespuestas(1);
responderPregunta(1, 1);

// Mostrar cantidad de respuestas correctas e incorrectas
mostrarResultadoRespuestas();

// Mostrar Array con listado de respuestas del usuario
mostrarRespuestasUsuario();