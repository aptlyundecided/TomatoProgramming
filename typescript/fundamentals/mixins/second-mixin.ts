import { Constructor } from './constructor-thing';
/**
 * Test Car Three.
 */
class CarThree {
    private make: string;
    private model: string;
    private year: number;
    constructor(
        make: string,
        model: string,
        year: number
    ) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
/**
 * Automatic Drive
 * ---
 * Function which adds automatic driving powers to the 
 * @param Base This is the class which will be augmented.
 */
// TODO: What is TBase?
// TODO: Why am I extending Constructor?
// TODO: SINCE WHEN COULD I EXTEND TYPES?
function AutomaticDrivingCar<TBase extends Constructor>(Base: TBase) {
    return class AutomaticDrive extends Base {
        private active: boolean = false;
        set Active(b: boolean) {
            this.active = b;
        }
        get Active(): boolean {
            return this.active;
        }
    }
}
/**
 *
 */
const ProvideAutomaticCar = AutomaticDrivingCar(CarThree);
const myCar = new ProvideAutomaticCar('Toyota', 'Yaris', 2008);
console.log(`Automatic Mode: ${myCar.Active}`);
myCar.Active = true;
console.log('Set automatic mode to true');
console.log(myCar);