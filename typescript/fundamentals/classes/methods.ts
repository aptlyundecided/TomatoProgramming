class Car {
    public ModeMap: any = {
        automatic: this.AutoDrive,
        manual: this.ManualDrive
    }

    public AutoDrive(): void {
        console.log('Driving Automatically!');
        console.log(this);
    }

    public ManualDrive(): void {
        console.log('Drive Manually');
        console.log(this);
    }

    constructor(private name: string) {}
}


const T = new Car('testcar');
console.log('Accessed Via Method Directly');
T.AutoDrive();
console.log('')
console.log('Accessed via a mapping of internal methods onto a plain object.');
T.ModeMap['automatic']();