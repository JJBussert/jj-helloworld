#!/usr/bin/env node

function helloWorld() {
    console.log('Hello World!');
}

if (require.main === module) {
    helloWorld();
} else {
    module.exports = helloWorld;
}
