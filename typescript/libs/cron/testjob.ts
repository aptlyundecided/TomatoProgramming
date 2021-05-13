import { CronJob } from 'cron';

let i = 0;


const NewCronJob = () => {
    return new CronJob('* * * * * *', () => {
        console.log('farts');
        i += 1;

        if (i === 4) {
            j.stop();
            j.addCallback(() => {
                console.log('Well who farted?');
            })
            j.start();
        }


        if (i === 10) {
            j.stop();
            j.addCallback(() => {
                console.log('YOU FARTED DIDN"T YOU?');
            })
            j.start();
        }

        if (i === 15) {
            j.stop();
            j = NewCronJob();
            j.start();
        }
    }, null, true);
}

let j = NewCronJob();

j.start();
