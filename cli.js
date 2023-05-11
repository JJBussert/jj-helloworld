#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { helloWorld } from './index.js';

const argv = yargs(hideBin(process.argv))
  .scriptName('jj-helloworld')
  .option('w', {
    alias: 'world',
    type: 'string',
    default: 'World',
    describe: 'The env file to save the environment variable',
  })
  .argv;

helloWorld(argv.world);