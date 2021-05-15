class List<T> {
    protected items: Array<T>

    constructor(itemList?: Array<T>) {
        this.items = []
        /**
         * Conditionally initialize to new data set
         */
        if (itemList) {
            itemList.forEach((i: any) => {
                this.add(i);
            });
        }
    }

    add(value: T): void {
        this.items.push(value)
    }

    
    filter (condition: any): List<T> {
        const filteredItems = this.items.filter((t: T) => { return t === condition })
        return new List(filteredItems);
    }
}




const Test = new List(['f', 't', 'g']);
const Test2 = Test.filter('f');
console.log(Test);
console.log(Test2);