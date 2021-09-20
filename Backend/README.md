## API Twitter (Backend)
## Instalacion de modulos
Express: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas): https://expressjs.com/es/4x/api.html

Dotenv: Dotenv es un módulo de dependencia cero que carga variables de entorno desde un archivo .env
## Estructura de acceso adquirida de .env
CONSUMER_KEY="###"
CONSUMER_SECRET="###"
ACCESS_TOKEN="###"
ACCESS_TOKEN_SECRET="###"
Esta informacion la obtenemos de la app creada en la API de Twitter.
Visite la API de Twitter y complete el formulario. Cuando termine, haga clic en la pestaña Claves y tokens de acceso para ver su clave / secreto de consumidor y clave / secreto del token de acceso. Copie estas claves / secretos en su archivo config.js.
## Config- Credencials (acceso a la API de utilizando la validacion de acceso de los tokens de nuestra app creada desde Twitter: https://developer.twitter.com/en/portal/projects-and-apps)
const twitterCredentials = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
};
const port = process.env.PORT || 4000;
Acceso desde el puerto: http://localhost:4000/

Axios: Axios es un cliente HTTP basado en promesas para node.jsy el navegador. Es isomórfico (= se puede ejecutar en el navegador y en nodejs con la misma base de código). En el lado del servidor:
https://axios-http.com/docs/intro

Twit: Cliente API de Twitter para nodo https://developer.twitter.com/en/docs/twitter-api/tools-and-libraries and install npm: https://www.npmjs.com/package/twit

## Endpoints y referencia API:
## Endpoint mostrar tweets: https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-home_timeline
async function findRecentTweets() {
    const params = { tweet_mode: 'extended', count: 10 };
    const data = await apiClient.get(`statuses/home_timeline`, params);
    return data;
}
Devuelve una colección de los Tweets y Retweets más recientes publicados por el usuario que se autentica y los usuarios que siguen.

## Endpoint buscar tweets: https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets
async function findTweetsByWord(word) {
    if (!word) throw new Error('Se requiere una palabra para realizar la búsqueda');
    const params = { tweet_mode: 'extended', count: 10, q: word, result_type: 'recent', lang: 'es' };
    const data = await apiClient.get(`search/tweets`, params);
    return data;
}
Devuelve una colección de Tweets relevantes que coinciden con una consulta específica.
Nota: Tenga en cuenta que el servicio de búsqueda de Twitter y, por extensión, la API de búsqueda no pretende ser una fuente exhaustiva de Tweets. No todos los Tweets se indexarán o estarán disponibles a través de la interfaz de búsqueda.
## Endpoint buscar usuarios: https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-search
async function findTweetsByuser(word){
    if (!word) throw new Error('Se requiere una palabra para realizar la búsqueda');
    const params = { tweet_mode: 'extended', count: 10, q: word, result_type: 'recent', lang: 'es' };
    const data = await apiClient.get(`users/search`, params);
    return data;
  } 
Proporciona una interfaz de búsqueda sencilla y basada en relevancia para las cuentas de usuario públicas en Twitter. Intente realizar consultas por temas de interés, nombre completo, nombre de la empresa, ubicación u otros criterios. No se admiten las búsquedas de concordancia exacta.

**Algoritmo**
1.- Acceso a endpoint con http://localhost:4000/(.get solicitado de cualquiera de los endpoints)/:word
2.- Si |!word| es diferente a word entonces 
    1.- mandara un aviso de error.
3.- Si no es diferente a |word| entonces
    1.- mostrara el data con: {
        los resultados referentes a la busqueda de |word|
    }

## Ejecucion del proyecto tanto backend como frontend:
