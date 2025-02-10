# Sistema de Gestión de Preguntas y Respuestas

## Descripción General
Este proyecto está diseñado para manejar un sistema de preguntas y respuestas, permitiendo crear, consultar y responder preguntas de manera eficiente. Incluye dos enfoques diferentes: mediante funciones globales o utilizando una clase en JavaScript.

## Características Principales

1. **Crear Preguntas:** Permite agregar preguntas con opciones y una respuesta correcta.
2. **Consultar Preguntas:** Lista todas las preguntas existentes en el sistema.
3. **Ver Respuestas:** Muestra las opciones disponibles para una pregunta específica.
4. **Responder Preguntas:** Permite al usuario responder una pregunta y valida si la respuesta es correcta.
5. **Normalización de Texto:** Garantiza que las comparaciones de texto sean consistentes eliminando tildes, mayúsculas y espacios adicionales.
6. **Resultados de Respuestas:** Muestra un resumen con la cantidad de respuestas correctas e incorrectas realizadas por el usuario.
7. **Respuestas Emitidas por el Usuario:** Permite visualizar todas las respuestas proporcionadas por el usuario durante el cuestionario.

## Nuevas Funcionalidades Agregadas

### mostrarResultadoRespuestas
Este método muestra un resumen del desempeño del usuario en el cuestionario, indicando el número total de respuestas correctas e incorrectas.

#### Ejemplo de Uso:
```javascript
question.mostrarResultadoRespuestas();
// Salida: Hubo un total de X respuestas correctas y Y de respuestas incorrectas.
```

### mostrarRespuestasUsuario
Este método permite visualizar todas las respuestas que el usuario ha emitido durante el cuestionario.

#### Ejemplo de Uso:
```javascript
question.mostrarRespuestasUsuario();
// Salida: ["respuesta1", "respuesta2", "respuesta3"]
```

## Programación Funcional y Orientada a Objetos

Este proyecto se puede implementar utilizando dos paradigmas principales: **Programación Funcional** y **Programación Orientada a Objetos**. A continuación, se describen ambos enfoques, junto con sus fortalezas, debilidades y cuándo utilizarlos.

### Programación Funcional
En este enfoque, las funciones independientes se utilizan para manejar el estado y la lógica del sistema. El proyecto implementa funciones globales para crear y gestionar preguntas.

#### Características
- Uso de funciones puras e independientes.
- Estado manejado mediante variables globales.
- Código más simple y directo.

#### Fortalezas
- Fácil de implementar y entender para proyectos pequeños.
- Bajo nivel de abstracción, ideal para prototipos.
- Menor consumo de recursos debido a su simplicidad.

#### Debilidades
- Escalabilidad limitada: manejar múltiples funcionalidades puede complicar el código.
- Dificultad para organizar y reutilizar el código en proyectos grandes.

#### Mejor uso
- **Proyectos pequeños o prototipos.**
- Aplicaciones con funcionalidades limitadas y sin necesidad de modularidad avanzada.

### Programación Orientada a Objetos
En este enfoque, se utiliza una clase `Question` que encapsula los métodos y el estado relacionados con las preguntas y respuestas.

#### Características
- Uso de clases y métodos para estructurar el código.
- Encapsulación de datos y funciones.
- Modularidad y reutilización de componentes.

#### Fortalezas
- Escalable y modular, ideal para proyectos medianos o grandes.
- Fácil de extender agregando nuevos métodos o funcionalidades.
- Organización del código clara y orientada a objetos.

#### Debilidades
- Más complejo de implementar inicialmente.
- Requiere mayor planificación del diseño del sistema.

#### Mejor uso
- **Proyectos medianos o grandes.**
- Aplicaciones que requieren escalabilidad y modularidad.
- Sistemas con lógica compleja o alta reutilización de componentes.

## Ejemplo de Uso

### Creación de una Pregunta
```javascript
question.crearPregunta("¿Cuál es el planeta más grande del sistema solar?", ["Júpiter", "Saturno", "Neptuno", "Urano"], "Júpiter");
```

### Consultar Preguntas
```javascript
question.consultarPreguntas();
// Salida: Lista numerada de preguntas.
```

### Ver Respuestas de una Pregunta
```javascript
question.verRespuestas(1);
// Salida: Pregunta y sus opciones de respuesta.
```

### Responder una Pregunta
```javascript
question.responderPregunta(1, "Júpiter");
// Salida: Indica si la respuesta es correcta o incorrecta.
```

### Mostrar Resultados
```javascript
question.mostrarResultadoRespuestas();
```

### Mostrar Respuestas del Usuario
```javascript
question.mostrarRespuestasUsuario();
```

## Diferencias entre Enfoques

### Clase `Question`
- Más escalable y modular.
- Encapsulación de métodos y datos.
- Ideal para sistemas medianos o grandes.

### Funciones Globales
- Simplicidad en la implementación.
- Menos modularidad.
- Ideal para prototipos o proyectos pequeños.

## Finalidad
Proporcionar una base para crear sistemas de gestión de preguntas y respuestas con flexibilidad, eficiencia y accesibilidad según las necesidades del proyecto.

## Link Página

https://lubiano83.github.io/Entrega-Final-Modulo-2-Bootcamp-DWFS-UDD/