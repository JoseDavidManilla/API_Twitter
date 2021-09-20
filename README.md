## API Twitter: índice de referencia de API es una lista central de todos los puntos finales incluidos en la plataforma de desarrollo de Twitter en nuestras diferentes API: https://developer.twitter.com/en/docs/api-reference-index
## Explicacion de Acceso a la API Twitter: https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api
1.- Solicite y reciba la aprobación de una cuenta de desarrollador.
2.- Guarde la clave y los tokens de su aplicación y manténgalos seguros.
    Clave de API : se trata esencialmente de un nombre de usuario y le permite realizar una solicitud en nombre de su aplicación.
    Secreto de clave de API : esta es una contraseña y le permite realizar una solicitud en nombre de su aplicación.
    Token de acceso : este token representa la cuenta de Twitter propietaria de la aplicación y le permite realizar una solicitud en nombre de esa cuenta de Twitter. 
    Secreto de token de acceso : este token también representa la cuenta de Twitter propietaria de la aplicación y le permite realizar una solicitud en nombre de esa cuenta de Twitter. 
    Token de portador : este token representa su aplicación y le permite autenticar solicitudes que requieren autenticación de token de portador de OAuth 2.0 o 1.0. 
3.- Configure su acceso.
4.- Haga su primera solicitud.
## Acceso a la app creada despues de ser aceptada nuestra cuenta de desarrollador:https://developer.twitter.com/en/portal/dashboard
El acceso al portal para desarrolladores permite poder crear nuestra app y de esa manera obtener los tokens que nos brinda dicha app y iniciar con las consultas basicas a la API de Twitter.
## API Twitter: uso de endpoint estandar:
Busqueda de usuarios: https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-search
Busqueda de Tweets: https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets
Busqueda de Tweets publicados por el usuario: https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-home_timeline

## Changlog (registro de cambios en el proyecto):
Todos los cambios notables de este proyecto se documentarán en este archivo.
## [1.1.0] - 2021-09-20
### Changlog
- Corregir errores de codificacion.
- Anexo de un nuevo endpoint disponible para busqueda (usuarios).
- Verificacion de autenticacion y credencias de la app creada en el portal de desarrolladores.
- Busqueda de usuarios y tweets con base a los endpoint version estandar.
- Busqueda de usuarios por preferencia: nombre, nombre de la empresa, ubicacion entre otros criterios.

