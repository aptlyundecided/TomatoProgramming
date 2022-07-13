/**
 * Threshold Check
 * ---
 * compare a process variable against a threshold value.
 *
 * returns 1 if above threshold, 0 if at threshold, and
 * -1 if below the threshold.
 * @param tv the threshold value
 * @param pv the process value
 * @constructor
 */
export const ThresholdCheck = (tv: number, pv: number): 1 | 0 | -1 => {
    return pv > tv ? 1 : pv === tv ? 0 : -1;
};