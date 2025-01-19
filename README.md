# Proyecto: Clase `Question`

## Descripción
La clase `Question` es una implementación en JavaScript que permite la creación, consulta y manipulación de preguntas y respuestas, diseñada para gestionar cuestionarios interactivos.

Este proyecto permite:
- Agregar preguntas con sus posibles respuestas.
- Consultar las preguntas disponibles.
- Ver las respuestas asociadas a una pregunta específica.
- Verificar si la respuesta proporcionada por un usuario es correcta.

## Funcionalidades

### 1. Creación de Preguntas
- **Método:** `crearPregunta(pregunta, respuestas, respuestaCorrecta)`
- **Descripción:** Permite agregar una nueva pregunta con un conjunto de posibles respuestas y una respuesta correcta.

### 2. Consulta de Preguntas
- **Método:** `consultarPreguntas()`
- **Descripción:** Lista todas las preguntas disponibles en el sistema.

### 3. Consulta de Respuestas
- **Método:** `verRespuestas(pregunta)`
- **Descripción:** Muestra las respuestas posibles asociadas a una pregunta específica.

### 4. Responder Preguntas
- **Método:** `responderPregunta(pregunta, respuestaUsuario)`
- **Descripción:** Permite verificar si la respuesta proporcionada por el usuario es correcta o incorrecta.

## Ejemplo de Uso
```javascript
// Crear instancia de la clase
const question = new Question();

// Agregar preguntas
question.crearPregunta("¿Cuál es el planeta más grande del sistema solar?", ["Júpiter", "Saturno", "Neptuno", "Urano"], "Júpiter");
question.crearPregunta("¿En qué año llegó el hombre a la Luna?", ["1969", "1975", "1963", "1970"], "1969");

// Consultar preguntas disponibles
question.consultarPreguntas();

// Ver respuestas de una pregunta
question.verRespuestas("¿Cuál es el planeta más grande del sistema solar?");

// Responder una pregunta
question.responderPregunta("¿Cuál es el planeta más grande del sistema solar?", "Júpiter");



# Proyecto: Gestión de Preguntas con Funciones Simples

## Descripción
Este proyecto utiliza **funciones simples en JavaScript** para gestionar preguntas y respuestas. Es una implementación básica y efectiva para manejar cuestionarios o encuestas de manera interactiva, utilizando un array global para almacenar las preguntas y respuestas.

Este proyecto incluye:
- Creación de preguntas con múltiples opciones de respuesta y una respuesta correcta.
- Consulta de todas las preguntas disponibles.
- Visualización de las respuestas asociadas a una pregunta específica.
- Validación de respuestas ingresadas por el usuario.

## Funcionalidades

### 1. Creación de Preguntas
- **Función:** `crearPregunta(pregunta, respuestas, respuestaCorrecta)`
- **Descripción:** Agrega una nueva pregunta con sus posibles respuestas y su respuesta correcta al array global `preguntas`.

### 2. Consulta de Preguntas
- **Función:** `consultarPreguntas()`
- **Descripción:** Lista todas las preguntas disponibles en el sistema.

### 3. Consulta de Respuestas
- **Función:** `verRespuestas(pregunta)`
- **Descripción:** Muestra las respuestas posibles asociadas a una pregunta específica.

### 4. Responder Preguntas
- **Función:** `responderPregunta(pregunta, respuestaUsuario)`
- **Descripción:** Verifica si la respuesta proporcionada por el usuario es correcta o incorrecta.

## Ejemplo de Uso
```javascript
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
  }
];

// Crear una nueva pregunta
crearPregunta("¿En qué continente está Egipto?", ["África", "Asia", "Europa", "América"], "África");

// Consultar las preguntas disponibles
consultarPreguntas();

// Ver respuestas de una pregunta específica
verRespuestas("¿En qué continente está Egipto?");

// Responder una pregunta
responderPregunta("¿En qué continente está Egipto?", "Africa");
