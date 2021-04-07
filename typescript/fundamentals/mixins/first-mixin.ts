import { Constructor } from './constructor-thing';

class FirstMixin {
    private celebration: boolean = false;
    public CelebrationTime(): void {
        console.log(`Celebration Time?: ${this.celebration}`);
    }
    constructor() {
        this.celebration = true;
    }
}
// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:
function Scale<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
        // Mixins may not declare private/protected properties
        // however, you can use ES2020 private fields
        _scale = 1;

        setScale(scale: number) {
            this._scale = scale;
        }

        get scale(): number {
            return this._scale;
        }
    };
}

const newMixin = Scale(FirstMixin);
const myFirstMixin = new newMixin()
/**
 * 
 */
myFirstMixin.setScale(1000);
myFirstMixin.CelebrationTime();
