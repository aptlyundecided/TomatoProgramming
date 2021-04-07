class inheritOne {
    private name: string;

    get Name(): string {
        return this.name;
    }

    set Name(newName: string) {
        this.name = newName;
    }

    constructor(name: string) {
        this.name = name;
    }
}


class IAmTheInheritor extends inheritOne {
    private age: number;

    get Age(): number {
        return this.age;
    }

    set Age(newAge: number) {
        this.age = newAge;
    }
}

const DoWut = new IAmTheInheritor('Alex');
DoWut.Age = 34.75;
console.log(DoWut);