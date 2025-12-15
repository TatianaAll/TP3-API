require('dotenv').config();
// On importe le package http de node
const http = require('http');
// On rajoute l’import de notre application Express
const app = require('./app');

// Pour dire sur quel port l'app Express va tourner
app.set('port', process.env.PORT || 3000);

// On créé un server qu’on stocke dans une variable
// Chaque fois qu’on va appeler une requête vers le serveur, la fonction à l’intérieur du createServer sera appelé
/*const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur ! Bravo :)');
});
*/
// On va lancer notre serveur via Express (qui va recevoir et envoyer la requête et la réponse)
const server = http.createServer(app);

// Le server écoute/attend qu’une requête s'exécute
// Par défaut on va utiliser le port 3000, mais on peut paramétrer un port précis dans un fichier .env
// avec process.env.PORT (PORT est mon nom de variable dans mon .env)
server.listen(process.env.PORT || 3000);


