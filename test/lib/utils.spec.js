import { expect } from 'chai';
import { makeMatrix, toggledMatrix } from '../../src/lib/utils';

describe('test of utils', () => {
  it('makeMatrix', () => {
    expect(makeMatrix(2, 2)).to.eql(
      [[false, false],
       [false, false]]);
  });

  it('toggledMatrix', () => {
    const arr = [
      [1, 0],
      [0, 0]];
    expect(toggledMatrix(arr, 0, 1)).to.eql(
      [[1, 0],
       [true, 0]]);
  });
});
