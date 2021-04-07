export class CarTwo {
    private make: string;
    private model: string;
    private year: number;

    public AutoDrive(): void {
        console.log('Driving Automatically!');
        console.log(this);
    }

    public ManualDrive(): void {
        console.log('Drive Manually');
        console.log(this);
    }

    get Make() {
        return this.make;
    }

    set Make(nm: string) {
        this.make = nm;
    }

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const TCar = new CarTwo('Toyota', 'Tercel', 1990);
console.log(TCar);

console.log(TCar.Make);
/**
 * You assign values THROUGH the setter.  I mean... why not?  What's the difference
 * between invoking a method, vs. assigning and using built-ins to acheive the same
 * result.
 */
TCar.Make = 'BMW';
console.log(TCar);