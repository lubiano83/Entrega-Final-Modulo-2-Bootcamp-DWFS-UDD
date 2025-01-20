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
const normalizarTexto = (texto) => {
  return texto
    .toLowerCase()
    .normalize("NFD") // Descompone caracteres con tildes
    .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos (tildes)
    .trim(); // Elimina espacios adicionales
};

// Crear una pregunta
crearPregunta = (pregunta, respuestas, respuestaCorrecta) => {
  if (!pregunta || !respuestas || !respuestaCorrecta) return console.log("Todos los campos son necesarios");
  if (typeof pregunta !== "string" || typeof respuestaCorrecta !== "string") return console.log("Los campos deben ser en formato string");
  
  const preguntaData = {
    pregunta: pregunta,
    respuestas: respuestas.map(item => item),
    respuestaCorrecta: respuestaCorrecta,
  };
  preguntas.push(preguntaData);
};

// Consultar preguntas
consultarPreguntas = () => {
  for( let i = 0; i < preguntas.length; i++ ) {
    console.log(`${i+1}.-`, preguntas[i].pregunta);
  }
};

// Ver respuestas
verRespuestas = (numeroPregunta) => {
  if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
  const leerPregunta = preguntas[numeroPregunta - 1].pregunta;
  const leerRespuestas = preguntas[numeroPregunta - 1].respuestas;
  console.log(leerPregunta, leerRespuestas);
};

// Responder una pregunta
responderPregunta = (numeroPregunta, respuestaUsuario) => {
  if(!numeroPregunta || typeof numeroPregunta !== "number" || numeroPregunta < 1 || numeroPregunta > preguntas.length) return console.log(`Debe colocar un numero entero mayor que 0 y menor o igual que ${preguntas.length}`);
  const respuestaCorecta = normalizarTexto(preguntas[numeroPregunta - 1].respuestaCorrecta);
  if(respuestaCorecta === respuestaUsuario) {
    console.log(`¡Felicitaciones! La respuesta a la pregunta: ${numeroPregunta}, es correcta.`);
  } else {
    console.log(`Lo siento, la respuesta a la pregunta: ${numeroPregunta}, es incorrecta..`);
  }
};

// Crear una nueva pregunta
crearPregunta("¿En qué continente está Egipto?", ["África", "Asia", "Europa", "América"], "África");

// Consultar las preguntas disponibles
consultarPreguntas();

// Ver respuestas de una pregunta específica
verRespuestas(1);

// Probar responder la pregunta
responderPregunta(1, "jupiter");