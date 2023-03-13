let parent = 10;

function scope() {
  let child = 1;
  console.log(parent );
  console.log(child );
}

scope()
  console.log(parent );
console.log(child);
