//console.log(`a=${a}`);

const a = 0;

function tryToRedeclareAInInnerScope() {
  a = 1;
  console.log(a);
}

console.log(a);

tryToRedeclareAInInnerScope();
