# Proyectos: Gestión de Preguntas y Respuestas

## Descripción General
Ambos proyectos están diseñados para manejar un sistema de preguntas y respuestas, permitiendo crear, consultar y responder preguntas de manera eficiente. Aunque tienen similitudes en cuanto a la funcionalidad principal, existen diferencias clave en su implementación, alcance y objetivos.

---

## Proyecto 1: Sistema de Gestión de Preguntas en Clase `Question`

### Finalidad
Este proyecto utiliza una clase en JavaScript para encapsular la lógica relacionada con la creación y gestión de preguntas y respuestas. La finalidad principal es ofrecer una solución estructurada y reutilizable para manejar sistemas de cuestionarios pequeños o medianos.

### Características
- Uso de una clase `Question` para encapsular métodos.
- Métodos para:
  - Crear preguntas con opciones y una respuesta correcta.
  - Consultar preguntas existentes.
  - Ver respuestas disponibles para una pregunta específica.
  - Verificar si una respuesta es correcta.
  - Eliminar preguntas del sistema.
- Enfoque en la organización y modularidad del código.
- Normalización automática de texto para evitar problemas con tildes, mayúsculas, o espacios adicionales.

### Alcance
Este sistema está diseñado para ser utilizado principalmente en aplicaciones pequeñas, como pruebas rápidas o cuestionarios educativos.

---

## Proyecto 2: Funciones Globales para Gestión de Preguntas

### Finalidad
Este proyecto implementa funciones globales en lugar de una clase para manejar preguntas y respuestas. El objetivo es proporcionar una solución más sencilla y directa para sistemas que no requieren encapsulación ni modularidad avanzada.

### Características
- Funciones independientes para:
  - Crear preguntas.
  - Consultar preguntas existentes.
  - Ver opciones de respuesta para una pregunta.
  - Validar si una respuesta es correcta.
- Uso de un array global para almacenar las preguntas.
- Normalización del texto similar al proyecto anterior.
- Mayor simplicidad y menor nivel de abstracción en comparación con el primer proyecto.

### Alcance
Ideal para aplicaciones rápidas o prototipos donde no se requiere un diseño extensible o altamente modular.

---

## Similitudes entre los Proyectos
1. **Funcionalidad Principal**: Ambos proyectos permiten crear, consultar, y responder preguntas.
2. **Normalización de Texto**: Ambos implementan un mecanismo para garantizar que las comparaciones de texto sean consistentes y no se vean afectadas por diferencias en tildes, mayúsculas o espacios.
3. **Propósito Educativo**: Ambos están diseñados para manejar sistemas de preguntas en contextos como cuestionarios o evaluaciones.

---

## Diferencias entre los Proyectos
| Aspecto                   | Proyecto 1: Clase `Question`                  | Proyecto 2: Funciones Globales           |
|---------------------------|-----------------------------------------------|------------------------------------------|
| **Estructura**            | Basado en una clase con métodos encapsulados | Basado en funciones independientes       |
| **Alcance**               | Ideal para sistemas medianos o modulares     | Adecuado para proyectos pequeños o rápidos |
| **Escalabilidad**         | Más escalable y extensible                   | Menos escalable debido a la falta de encapsulación |
| **Organización del Código** | Mayor modularidad y reutilización           | Código más directo pero menos organizado |
| **Adición de Funciones Nuevas** | Sencillo de extender mediante nuevos métodos | Requiere agregar más funciones globales |

---

## Finalidad General del Proyecto
La finalidad de ambos proyectos es proporcionar una base para la creación de sistemas de gestión de preguntas y respuestas, asegurando:
- **Eficiencia**: Mediante la normalización del texto y validaciones integradas.
- **Flexibilidad**: Al permitir diferentes niveles de complejidad según el enfoque utilizado.
- **Accesibilidad**: Ofreciendo una solución clara y fácil de implementar para diferentes tipos de aplicaciones.