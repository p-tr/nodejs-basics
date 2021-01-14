require('dotenv').config();

const { env } = process;

// idée naive
//const { MYENVVAR } = env;
//console.log(MYENVVAR);

// idée plus saine (standard)
const MYENVVAR = env.MYENVVAR || 'ma valeur par défaut';
//const MYENVVAR = env.MYENVVAR ? env.MYENVVAR : 'ma valeur par défaut'

// 2 raccourcis en JS
// expr1 || expr2 : exécuter expr2 si expr1 se résout par null, 0, undefined, false
// expr1 && expr2 : exécuter expr2 si expr1 se résout par true (une fois cast en booléen)

/*
while(true) {
  console.log(".");
}
*/

process.on('beforeExit', (code) => {
  console.log('Before Exit');
});

// Les process sont des EventEmitters
//  => .on(eventName, callback)
process.on('exit', (code) => {
  console.log(`exiting with code ${code}...`);
});

// Avec Ctrl-C ou un kill explicite depuis un moniteur
// 'beforeExit' et 'exit' ne sont pas appelées.
// => Se brancher sur les événements signaux.
// => Semble ne pas fonctionner sous Ubuntu + Bash (terminal en strict-mode ?)
process.on('SIGINT', (signal) => {
  console.log(signal);
  console.log('SIGINT');
});

process.on('SIGTERM', (signal) => {
  console.log(signal);
  console.log('SIGTERM');
});
