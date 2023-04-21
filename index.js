
function helloWorld() {
    console.log('Hello World!');
  }
  
  const isMainModule = import.meta.url === new URL(import.meta.url).pathname;
  
  if (isMainModule) {
    helloWorld();
  }
  
  export { helloWorld };
  