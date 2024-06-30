import * as assert from 'assert';
import { sayHello } from './lib';

describe('My Library', () => {
  it('Should say hello', () => {
    assert.equal(sayHello('World'), 'Hello, World');
  });
});
