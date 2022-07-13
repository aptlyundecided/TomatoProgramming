import { expect } from 'chai';
import { SubscriberCountCheck } from './subscriber-count-check';

describe('Subscriber Count Check', () => {
    it('should return true if subscriber count is at or higher than threshold', () => {
        expect(SubscriberCountCheck(231, {subscriberCount: 231})).to.equal(true);
        expect(SubscriberCountCheck(231, {subscriberCount: 275})).to.equal(true);
        expect(SubscriberCountCheck(231, {subscriberCount: 205})).to.equal(false);
    });
});