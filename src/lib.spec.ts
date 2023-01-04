import { expect } from 'chai';
import { sayHello } from './lib.js';

describe('My Library', () => {
  it('Should say hello', () => {
    expect(sayHello('World')).to.equal('Hello, World');
  });
});
