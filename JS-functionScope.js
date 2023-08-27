let parent = 10;

function scope() {
  let child = 1;
  console.log(parent );
  console.log(child );
}

scope()
  console.log(parent );  //javaScript Function Scope. we can test that child can't console.log out side the function{} but parent can.
console.log(child);
