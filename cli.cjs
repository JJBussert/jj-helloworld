#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

import('./index.js').then(({ helloWorld }) => {
  const argv = yargs(hideBin(process.argv))
    .option('world', {
      alias: 'w',
      type: 'string',
      description: 'Override the default World',
    })
    .argv;

  const world = argv.world || 'World';
  helloWorld(world);
}).catch(err => {
  console.error('Error:', err);
});
