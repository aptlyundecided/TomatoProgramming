import { expect } from 'chai';
import { ThresholdTools } from './threshold-tools';

describe('Threshold Tools', () => {
   let thresholdTools: ThresholdTools;

   beforeEach(() => {
      thresholdTools = new ThresholdTools(100);
   });

   it('should create', () => {
       expect(typeof thresholdTools).to.equal('object');
   });

   it('should return true when process value is >= threshold value', () => {
      expect(thresholdTools.atOrAboveThreshold(89)).to.equal(false);
      expect(thresholdTools.atOrAboveThreshold(101)).to.equal(true);
      expect(thresholdTools.atOrAboveThreshold(100)).to.equal(true);
   });
});