// IMPORTER un module !
var _ = require('lodash');

function hello() {
  /*
  this.__proto__.world = function() {
    console.log("Hello World !");
  }
  */

  //var nr_args = arguments.length;
  //console.log('nr_args=' + nr_args);
  var name = arguments[0];
  if(_.isUndefined(name)) {
    console.log("Beware ! First argument is undefined !");
  } else {
    //console.log("Hello " + name + " !");
    console.log(`Hello ${name} !`);
  }
}

hello.__proto__.world = function() {
  console.log("Hello World !");
}


var loop = function() {
/*
  for(var i = 0; i < 30; i++) {
    console.log("Boucle, itération " + i);
  }
*/

  var i = 0;
  while(i < 30) {
    console.log(`Boucle itération ${i}`);
    ++i;
  }

/*
  i = 0;
  do {
    console.log("Boucle, itération " + i);
    ++i;
  } while(i < 30);
*/
}

//hello("Pierre");
//hello.world();
