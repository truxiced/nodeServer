const schedule = require('node-schedule');
const promise = require('request-promise');

function scheduleFetchDayLight() {
    const rule = new schedule.RecurrenceRule();
    rule.hour = 21;
    rule.minute = 35;
    // rule.second = 10;
    rule.dayOfWeek = [new schedule.Range(0, 6)];

    schedule.scheduleJob(rule, function() {
        const promiseOptions = {
            url: 'http://api.sunrise-sunset.org/json?lat=' + global.lat + '&lng=' + global.long,
            json: true,
        };

        promise(promiseOptions)
        .then(function(response) {
            console.log(response);
        });
    });
};

module.exports.scheduleFetchDayLight = scheduleFetchDayLight;
