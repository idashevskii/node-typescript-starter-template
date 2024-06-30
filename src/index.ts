import { sayHello } from './lib';
import { hostname } from 'node:os';
import { createServer } from 'node:http';

const port = 3000;

createServer((request, response) => {
  response.end(sayHello(hostname()));
}).listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
