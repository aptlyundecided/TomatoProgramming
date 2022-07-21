import { expect } from 'chai';
import { MergeTwoSortedLists, ListNode } from './merge-two-sorted-lists';

describe('Merge Two Sorted Lists', () => {
    it('[0, 1, 2, 3] -> [4, 5, 6, 7]', () => {
        const l1 = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, null))));
        const l2 = new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, null))));
        // const l1 = [0, 1, 2];
        // const l2 = [4, 5, 6];
        expect(MergeTwoSortedLists(l1, l2)).to.equal([0, 1, 2, 4, 5, 6]);
    });

    it('[], [0]', () => {
        const l1 = null;
        const l2 = new ListNode(0);
        expect(MergeTwoSortedLists(l1, l2)).to.equal([0]);
    });
    // it('[0, 0, 2, 2] -> [0, 0, 2, 2]', () => {
    //     const l1 = [0, 0, 2, 2];
    //     const l2 = [0, 0, 2, 2];
    //     expect(MergeTwoSortedLists(l1, l2)).to.deep.equal([0, 0, 0, 0, 2, 2, 2, 2]);
    // });
    //
    // it('should work with negative numbers', () => {
    //     expect(TwoSum([0, 0, 1, 1, -3, 13], 10)).to.deep.equal([-3, 13]);
    // });
});