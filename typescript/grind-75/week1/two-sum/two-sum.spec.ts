import { expect } from 'chai';
import { TwoSum } from './two-sum';

describe('Two Sum', () => {
   it('should find two numbers that sum together to a target value', () => {
      expect(TwoSum([0, 1, 2, 4, 4], 8)).to.deep.equal([4, 4]);
   });

   it('should work with negative numbers', () => {
      expect(TwoSum([0, 0, 1, 1, -3, 13], 10)).to.deep.equal([-3, 13]);
   });
});