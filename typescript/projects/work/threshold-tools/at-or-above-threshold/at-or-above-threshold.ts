import { ThresholdCheck } from '../threshold-check';

/**
 * At Or Above Threshold
 * ---
 *
 * @param tv
 * @param pv
 * @constructor
 */
export const AtOrAboveThreshold = (tv: number, pv: number): boolean => {
    return ThresholdCheck(tv, pv) === 1 || ThresholdCheck(tv, pv) === 0;
};
