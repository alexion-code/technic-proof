# technic-proof
Technic Proof

Para realizar la solución se ha utilizado:

    -VS CODE
    -node v16.10.0
    -npm 7.24.0
    -Gimp (para calcular las distancias en pixeles en el diseño original)

Instalación:

    Ejecutar "npm i" desde la línea de comandos (CMD) en la carpeta del proyecto y una vez instaladas las dependencias, ejecutar con "npm start".

#########################################################################################


Respuesta a las cuestiones planteadas:


¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

-Siguiendo los requisitos básicos del diseño y viendo un poco el funcionamiento de la web de finetwork, en general.


¿Hay alguna mejora que pueda hacer en su envío?

-Con más tiempo y más medios (fuentes, diseños con las medidas de fuentes y margenes estilo Invision, ...) se podrían haber realizado muchísimas mejoras:

    1. Diseños responsivos adaptables a los distintos dispositivos (se ha realizado un diseño responsivo pero se podría mejorar muchísimo con los requisitos adecuados).

    2. Validación de formularios con alguna librería permitida por la arquitectura del proyecto.

    3. Añadir pantallas de error en caso de fallo del servicio y componentes en caso de error en las llamadas a servicios.
    
    4. Añadir el tipo de fuente utilizada en el diseño.


¿Qué haría de manera diferente si se le asignara más tiempo?

    1. Añadiría Redux para la persistencia local de los datos.
    2. Llamadas a servicios reales creando una api con NodeJs.
