const moment = require('moment-timezone');


function getRandomHourWithinActiveHours(activeHoursData){

    const now = moment().tz("America/New_York");
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
        date: now.date()
    });

    if(endTime.isBefore(startTime)){
        endTime.add(1, 'day');
    }

    //if current time is before start time, set random time after start time 
    //else, set random time after current time
    const referenceTime = now.isBefore(startTime) ? startTime : now.add(1, 'minutes');

    const diffMinutes = endTime.diff(referenceTime, 'minutes');
    const randomMinute = Math.floor(Math.random() * diffMinutes);
    const randomTime = referenceTime.add(randomMinute, 'minutes');

    //Format for random time
    return randomTime.format("HH:mm");
}

module.exports = {
    getRandomHourWithinActiveHours,
};