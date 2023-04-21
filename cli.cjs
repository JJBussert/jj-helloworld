#!/usr/bin/env node

import('./index.js').then(({ helloWorld }) => {
    helloWorld();
}).catch(err => {
    console.error('Error:', err);
});
