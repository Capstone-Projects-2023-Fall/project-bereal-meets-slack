const moment = require('moment');

function getRandomHourWithinActiveHours(activeHoursData){

    const now = moment().tz("America/New York");
    const startTime = moment(activeHoursData.start_time, "HH:mm");
    const endTime = moment(activeHoursData.end_time, "HH:mm");

    //Adjust start time for today
    startTime.set({
        year: now.year(),
        month: now.month(),
        date: now.date()
    });

    //adjust end time for today
    endTime.set({
        year: now.year(),
        month: now.month(),
        date: now
    });

    if(endTime.isBefore(startTime)){
        endTime.add(1, 'day');
    }

    //if current time is before start time, set random time after start time 
    //else, set random time after current time
    const referenceTime = now.isBefore(startTime) ? startTime : now;

    const diffMinutes = endTime.diff(startTime, 'minutes');
    const randomMinute = Math.floor(Math.random() * diffMinutes);
    const randomTime = startTime.add(randomMinute, 'minutes');

    //Format for random time
    return randomTime.format("HH:mm");
}

module.exports = {
    getRandomHourWithinActiveHours,
};