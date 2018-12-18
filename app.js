const cron = require("node-cron");

const axios = require('axios');
/*************
Black        0;30     Dark Gray     1;30
Red          0;31     Light Red     1;31
Green        0;32     Light Green   1;32
Brown/Orange 0;33     Yellow        1;33
Blue         0;34     Light Blue    1;34
Purple       0;35     Light Purple  1;35
Cyan         0;36     Light Cyan    1;36
Light Gray   0;37     White         1;37
#    .---------- constant part!
#    vvvv vvvv-- the code from above
RED='\033[0;31m'
NC='\033[0m' # No Color
printf "I ${RED}love${NC} Stack Overflow\n"
 */

console.log('\033[1;34m\033[40mEsperando a actualizaciones :) \033[0m');

// CRON JOB
/**
 * s = second
 * m = minute
 * h = hour
 * d = month day
 * wd = day of week
 *  s    m    h    d    m    wd
 *  ┬    ┬    ┬    ┬    ┬    ┬
 *  │    │    │    │    │    │
 *  │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
 *  │    │    │    │    └───── month (1 - 12)
 *  │    │    │    └────────── day of month (1 - 31)
 *  │    │    └─────────────── hour (0 - 23)
 *  │    └──────────────────── minute (0 - 59)
 *  └───────────────────────── second (0 - 59, OPTIONAL)
 */
cron.schedule("0,30 * * * * *", function () {
    console.log("---------------------");
    console.log("Running Cron Job");
    const date = new Date();
    console.log(date.getHours(), date.getMinutes(), date.getSeconds());
    // axios.get('https://ergast.com/api/f1/seasons.json').then( e => console.log(e.data.MRData.SeasonTable));
    axios.get('http://localhost:5000/reservas/actual')
         .then( e => console.log(e.data.o))
         .catch( error => console.log(error) );
});