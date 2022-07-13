
/**
 * Threshold Tools
 * ---
 * A set of tooling to handle the ability to evaluate
 * a process variable against a threshold in a variety of
 * scenarios.
 */
export class ThresholdTools {
    thresholdValue: number;

    /**
     * At Or Above Threshold
     * ---
     * check that a process variable is at or above a given
     * threshold value stored within this class instance.
     * @param pv process variable under evaluation.
     */
    atOrAboveThreshold(pv: number): boolean {
        return pv >= this.thresholdValue;
    }


    constructor(tv: number) {
        this.thresholdValue = tv;
    }
}