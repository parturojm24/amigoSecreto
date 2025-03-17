# README amigoSecreto
codigo terminado, esperando aprobar y agradecido por la oportunidad, consulte unos cuantos videos extras para poder concluirlo 
Funcionamiento
Función "agregarAmigo()":
Cuando alguien escribe un nombre en el campo de texto y presiona el botón para agregar, yo recojo ese valor y verifico que no esté vacío o contenga solo espacios. Si el campo está vacío, muestro un mensaje de alerta para recordar que se necesita un nombre válido. Si el nombre es correcto, lo guardo en el arreglo "listaAmigos", que actúa como nuestra base de datos temporal. Luego, limpio el campo de texto para que el usuario pueda escribir otro nombre sin distracciones y llamo a "actualizarListaAmigos()" para reflejar inmediatamente los cambios en la lista visible de la interfaz. Esto asegura que todo lo que se agrega se muestre al instante.

Función "actualizarListaAmigos()":
Mi trabajo aquí es mantener sincronizada la lista visual con los datos del arreglo "listaAmigos". Primero, selecciono el contenedor de la lista en el HTML y elimino todo su contenido anterior para evitar duplicados. Luego, recorro cada elemento del arreglo y, por cada nombre, creo un nuevo elemento de lista "(<li>)", le asigno el nombre como texto y lo agrego al contenedor. De esta forma, la lista en pantalla siempre refleja fielmente los nombres almacenados, sin importar cuántas veces se agreguen o actualicen.

Función "sortearAmigo()":
Cuando se activa esta función, reviso si hay nombres en "listaAmigos" para evitar sorteos vacíos. Si no hay datos, muestro una alerta para indicar que se necesitan nombres primero. Si hay elementos, genero un índice aleatorio usando la longitud del arreglo y selecciono el nombre correspondiente. Finalmente, actualizo la sección de resultados en el HTML para mostrar el nombre del ganador con un formato claro y destacado. Todo el proceso está diseñado para ser transparente: desde la validación inicial hasta la selección aleatoria y la presentación del resultado.
