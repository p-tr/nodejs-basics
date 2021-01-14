// Programmation asynchrone

const fs = require('fs');

// Callbacks (oldschool)

// lire un fichier
/*
fs.readFile('/tmp/async-test', 'utf-8', (err, data) => {
  if(err) {
    console.error(err);
  } else {
    console.log('[scope fs.readFile] - dans le callback');
    console.log(data);

    // modifier le contenu
    data = 'Bonjour le Monde !';

    // écrire le nouveau contenu
    fs.writeFile('/tmp/async-test', data, (err) => {
      if(err) {
        console.error(err);
      } else {
        console.log('[scope fs.writeFile] - dans le callback');

        console.log(data);

        console.log('[scope fs.writeFile] - fin du callback');
      }
    });

    console.log('[scope fs.readFile] - fin du callback');
  }
});

console.log('[scope global] - après readFile');
*/

// Promises (hipster)
async function pReadFile(path, options) {
  return await new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function pWriteFile(path, data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/*
pReadFile('/tmp/async-test', 'utf-8').then((data) => {
  console.log('[scope pReadFile.then]');
  console.log(data);

  data = 'Hello World Again !';

  pWriteFile('/tmp/async-test', data).then(() => {
    console.log('OK');
  }).catch((err) => {
    console.error(err);
  });
}).catch((err) => {
  console.error(err);
});

console.log('!!!');
*/

// Async / Await (standard)

async function asyncReadFile(path, options) {
  let data = await pReadFile(path, options);
  return data;
}

async function asyncWriteFile(path, data, options) {
  await pWriteFile(path, data, options);
}


async function test() {
  return 0;
}

(async () => {
  try {
    let data = await asyncReadFile('/tmp/async-test', 'utf-8');
    console.log(data);
    data = data.toLowerCase();
    await asyncWriteFile('/tmp/async-test', data);
  } catch(err) {
    console.error(err);
  }
})();

test().then((value) => { console.log(value); /* 0 */ });
(async () => {
  let value = await test(); // 0;
  console.log(value);
})();

console.log(test());
