
import { sayHello } from './lib.js';
import { hostname } from 'node:os';

console.log(sayHello(hostname()));
