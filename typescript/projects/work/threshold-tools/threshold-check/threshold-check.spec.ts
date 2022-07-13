import { expect } from 'chai';
import { ThresholdCheck } from './threshold-check';

describe('Threshold Check', () => {
    it('should return 1 if the process value is greater than the threshold value', () => {
        expect(ThresholdCheck(100, 101)).to.equal(1);
        expect(ThresholdCheck(100, 1000000)).to.equal(1);
        expect(ThresholdCheck(-100, -10)).to.equal(1);
    });

    it('should return 0 if the process value is the same as the threshold value', () => {
        expect(ThresholdCheck(0, 0)).to.equal(0);
        expect(ThresholdCheck(100, 100)).to.equal(0);
        expect(ThresholdCheck(-100, -100)).to.equal(0);
    });

    it('should return -1 if the process value is less than the threshold value', () => {
        expect(ThresholdCheck(0, -1)).to.equal(-1);
        expect(ThresholdCheck(100, 89)).to.equal(-1);
        expect(ThresholdCheck(-100, -110)).to.equal(-1);
    });
});