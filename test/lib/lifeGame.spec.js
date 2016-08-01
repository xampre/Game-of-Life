import { expect } from 'chai';
import { neighborLives, nextGenalation, rule } from '../../src/lib/lifeGame.js';

describe('test of lifeGame', () => {
  const arr = [[1, 0, 0, 1],
               [0, 1, 1, 0],
               [1, 1, 1, 0],
               [0, 0, 1, 1]];

  it('neighborLives', () => {
    expect(neighborLives(arr, 1, 1)).to.equal(5);
    expect(neighborLives(arr, 2, 3)).to.equal(4);
  });

  it('nextGenalation', () => {
    expect(nextGenalation(arr, rule)).to.eql(
      [[true, false, false, false],
       [false, false, false, false],
       [true, false, false, false],
       [false, false, false, false]]
    );
  });
});
