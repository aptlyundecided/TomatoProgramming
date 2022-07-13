import { ThresholdTools } from '../work/threshold-tools/threshold-tools';

/**
 * A
 * ---
 * just an any type reference to be extended.
 */
type a = any;

/**
 * Contains Subscriber Count
 * ---
 * provide typed interface tooling for Subscriber Count
 * Check function.
 */
export interface ContainsSubscriberCount extends a {
    subscriberCount: number;
    subscriberThreshold: number;
}

/**
 * Subscriber Count Check
 * ---
 * check if the subscriber count of this client / account is
 * high enough to validate that the client or account holder
 * is able to access specific features.
 * @param tv the threshold value for specific feature access
 * @param anyStruct.subscriberCount the number of subscribers of a specific account
 * @constructor
 */
export const SubscriberCountCheck = (anyStruct: ContainsSubscriberCount): boolean => {
    if (typeof anyStruct === 'undefined' || anyStruct === null) {
        console.log('SubscriberCheck:: parameter anyStruct is null or undefined');
        return false;
    }
    if (typeof anyStruct.subscriberCount === 'undefined' || anyStruct.subscriberCount === null) {
        console.log('SubscriberCheck:: subscriberCount property of anyStruct is null or undefined');
        return false;
    }

    // Instantiate Threshold checking tools
    const tt: ThresholdTools = new ThresholdTools(anyStruct.subscriberThreshold);

    // Check is
    return tt.atOrAboveThreshold(anyStruct.subscriberCount);
};