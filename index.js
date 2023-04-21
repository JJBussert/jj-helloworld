// index.js

function helloWorld(world = 'World') {
    console.log(`Hello ${world}!`);
  }
  
  const isMainModule = import.meta.url === new URL(import.meta.url).pathname;
  
  if (isMainModule) {
    helloWorld();
  }
  
  export { helloWorld };
  