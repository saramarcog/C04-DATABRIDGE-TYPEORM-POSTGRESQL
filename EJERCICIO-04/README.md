**Pregúntate por qué el dato aparece en Entity y DTO: uno representa persistencia y el otro la entrada HTTP.**

Porque tienes diferentes funciones.DTO es el filtro que valida lo que el cliente envía, y la Entity define cómo se guarda esa información en la base de datos.