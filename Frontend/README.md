## Detalles y configuracion de API Twitter.
## Requisitos para acceder a la API de Twitter y configuracion:
- Cuenta de desarrollador estandar (version v1.1 gratuita) aceptada por la API de Twitter.
- Permisos de la aplicacion: Lectura y escribe.
- Configuración de autenticación: 
- OAuth de 3 vías está habilitado: 
Utilice Iniciar sesión con Twitter, también conocido como Iniciar sesión con Twitter, para colocar un botón en su sitio o aplicación que permita a los usuarios de Twitter disfrutar de los beneficios de una cuenta de usuario registrada con tan solo un clic. Esto funciona en sitios web, iOS, aplicaciones móviles y de escritorio.
- Disponible para: 
Navegadores: si sus usuarios pueden acceder a un navegador, puede integrarlo con Iniciar sesión con Twitter. Obtenga más información sobre el flujo de inicio de sesión del navegador.
## La estructura para acceso a la app debe ser la siguiente:
CONSUMER_KEY="###"
CONSUMER_SECRET="###"
ACCESS_TOKEN="###"
ACCESS_TOKEN_SECRET="###"
Esta informacion la obtenemos de la app creada en la API de Twitter.
Visite la API de Twitter y complete el formulario. Cuando termine, haga clic en la pestaña Claves y tokens de acceso para ver su clave / secreto de consumidor y clave / secreto del token de acceso. Copie estas claves / secretos en su archivo config.js.
## End points:
## GET: statuses/home_timeline:
Devuelve una colección de los Tweets y Retweets más recientes publicados por el usuario que se autentica y los usuarios que siguen. La línea de tiempo de inicio es fundamental para la forma en que la mayoría de los usuarios interactúan con el servicio de Twitter.

## GET: search/tweets:
El punto final de búsqueda reciente devuelve Tweets de los últimos siete días que coinciden con una consulta de búsqueda.

## GET: search/users:
El punto final de busqueda de usuarios busca consultas por temas de interés, nombre completo, nombre de la empresa, ubicación u otros criterios. No se admiten las búsquedas de concordancia exacta.

## Npm instalados para uso del proyecto:
Throw: La sentencia throw se utiliza para lanzar explícitamente una excepción. En primer lugar se debe obtener un descriptor de un objeto Throwable, bien mediante un parámetro en una cláusula catch
 
Twit: Cliente API de Twitter para nodo, Admite REST y API de transmisión .

Axios: es un cliente HTTP basado en promesas simples para el navegador y node.js. Axios proporciona una biblioteca fácil de usar en un paquete pequeño con una interfaz muy extensible.

## Ejecucion del proyecto tanto backend como frontend:
Para realizar la ejecucion del proyecto es necesario:
1.- Instalar npm install concurrently --save del lado del servidor(Backend)
2.- Hacer la peticion desde el script del package.json del servidor(Backend)
    "start": "concurrently \"npm run server\" \"cd ../frontend && npm start\"",
    "server":"nodemon index.js"
3.- Desde el Backend hacemos la peticion para correr backend y frontend:
    npm start 
Esto permite que inicien tanto servidor como cliente al mismo tiempo.



