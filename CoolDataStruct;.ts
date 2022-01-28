type CoolDataStruct = any;

type FindCoolPeople = () => void
type Users = any;
const FindProperty = (d: string):  => {
    return;
}

const ProvideBinaries = (u: Users) => { return; }


const BuildSomeNeatSoftware = (data: CoolDataStruct) => {
    const property = 'cool-people';
    try {
        const folks = FindProperty(property);
        return ProvideBinaries(folks);
    } catch {
        console.error('Uh Oh');
        return {
            msg: 'failed during BuildSomeNeatSoftware',
            err: 'the bouncy house deflated',
            filename: __filename
        }
    }
}