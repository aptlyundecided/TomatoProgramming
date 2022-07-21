export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export const MergeTwoSortedLists = (list1: ListNode | null, list2: ListNode | null): ListNode => {
    let x: ListNode = null;
    let l1p: ListNode = list1;
    let l2p: ListNode = list2;

    const addNode = (v: number, l?: ListNode) => {
        let updated: ListNode = Object.assign({}, l);
        let p: ListNode = updated;
        let again = true;

        if (l) {
            while (again) {
                if (p.next === null) {
                    p.next = new ListNode(v);
                    again = false;
                } else {
                    p = p.next;
                }
            }
        } else {
            updated = new ListNode(v);
        }

        return updated;
    }


    while (l1p !== null || l2p !== null) {
        if (l1p && l2p) {
            if (l1p.val <= l2p.val) {
                // merged.push(new ListNode(l1p.val));
                x = addNode(l1p.val, x);
                l1p = l1p.next;
            } else {
                // merged.push(new ListNode(l2p.val));
                x = addNode(l2p.val, x);
                l2p = l2p.next;
            }
        } else if (l2p) {
            // merged.push(new ListNode(l2p.val));
            x = addNode(l2p.val, x);
            l2p = l2p.next;
        } else {
            x = addNode(l1p.val, x);
            l1p = l1p.next;
        }
    }

    return x;
};


const WorksWithArrays = (list1: number[], list2: number[]) => {
    const merged = [];
    const totalLength = list1.length + list2.length;

    for (let i = 0; i < totalLength; i += 1) {
        if (list1[0] <= list2[0]) {
            merged.push(list1[0]);
            list1.splice(0, 1);
        } else {
            merged.push(list2[0]);
            list2.splice(0, 1);
        }
    }

    return merged;
}