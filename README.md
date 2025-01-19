Proyecto 1: Clase Question

Descripción

La clase Question es una implementación en JavaScript que permite la creación, consulta y manipulación de preguntas y respuestas, diseñada para gestionar cuestionarios interactivos. Este proyecto permite agregar preguntas con sus posibles respuestas, consultar las preguntas disponibles, ver las respuestas asociadas a una pregunta específica y verificar si la respuesta proporcionada por un usuario es correcta.

Funcionalidades

Creación de Preguntas:

Método: crearPregunta(pregunta, respuestas, respuestaCorrecta)

Permite agregar una nueva pregunta con un conjunto de posibles respuestas y una respuesta correcta.

Consulta de Preguntas:

Método: consultarPreguntas()

Muestra un listado de todas las preguntas disponibles en el sistema.

Consulta de Respuestas:

Método: verRespuestas(pregunta)

Muestra las respuestas posibles asociadas a una pregunta específica.

Responder Preguntas:

Método: responderPregunta(pregunta, respuestaUsuario)

Permite verificar si la respuesta proporcionada por el usuario es correcta o incorrecta.

const question = new Question();

// Agregar preguntas
question.crearPregunta("¿Cuál es el planeta más grande del sistema solar?", ["Júpiter", "Saturno", "Neptuno", "Urano"], "Júpiter");

// Consultar preguntas
question.consultarPreguntas();

// Ver respuestas de una pregunta
question.verRespuestas("¿Cuál es el planeta más grande del sistema solar?");

// Responder una pregunta
question.responderPregunta("¿Cuál es el planeta más grande del sistema solar?", "Júpiter");

Propósito

Este proyecto es útil para crear sistemas de evaluación interactivos, como cuestionarios educativos, exámenes en línea o encuestas dinámicas. Su diseño modular facilita su integración en aplicaciones web o proyectos más grandes.

Proyecto 2: Funciones para Gestión de Preguntas

Descripción

Este proyecto utiliza funciones puras en JavaScript para gestionar preguntas y respuestas. Implementa funcionalidades similares al proyecto anterior, pero no utiliza clases. Las preguntas y respuestas se gestionan a través de un array global y funciones independientes para interactuar con los datos.

Funcionalidades

Creación de Preguntas:

Función: crearPregunta(pregunta, respuestas, respuestaCorrecta)

Agrega una nueva pregunta con sus posibles respuestas y respuesta correcta al array global preguntas.

Consulta de Preguntas:

Función: consultarPreguntas()

Lista todas las preguntas disponibles.

Consulta de Respuestas:

Función: verRespuestas(pregunta)

Muestra las posibles respuestas de una pregunta específica.

Responder Preguntas:

Función: responderPregunta(pregunta, respuestaUsuario)

Verifica si la respuesta proporcionada por el usuario es correcta o no.

// Agregar preguntas
crearPregunta("¿En qué continente está Egipto?", ["África", "Asia", "Europa", "América"], "África");

// Consultar preguntas
consultarPreguntas();

// Ver respuestas de una pregunta
verRespuestas("¿En qué continente está Egipto?");

// Responder una pregunta
responderPregunta("¿En qué continente está Egipto?", "Africa");

Propósito

Este proyecto es ideal para sistemas más simples donde no se requiere el uso de clases o una estructura más compleja. Es una solución directa para manejar cuestionarios o encuestas de manera sencilla.

Comparación entre los Proyectos

Característica

Clase Question

Funciones Simples

Estructura

Basado en una clase con métodos privados.

Uso de funciones independientes.

Encapsulación

Datos encapsulados dentro de la clase.

Datos globales accesibles directamente.

Escalabilidad

Más adecuada para proyectos grandes.

Más sencilla para proyectos pequeños.

Reutilización de Código

Modular y reutilizable.

Requiere mayor control manual.

Facilidad de Uso

Más compleja al inicio.

Más fácil para principiantes.

Conclusión

Ambos proyectos cumplen con el objetivo de gestionar preguntas y respuestas. El primero (clase Question) es más robusto y adecuado para proyectos escalables, mientras que el segundo es ideal para soluciones rápidas y sencillas.
