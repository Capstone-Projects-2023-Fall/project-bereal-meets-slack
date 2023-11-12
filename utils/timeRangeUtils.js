const moment = require('moment');

function getRandomHourWithinActiveHours(activeHoursData){

    const startTime = moment(activeHoursData.start_time, "HH:mm");
    const endTime = moment(activeHoursData.end_time, "HH:mm");

    if(endTime.isBefore(startTime)){
        endTime.add(1, 'day');
    }

    const diffMinutes = endTime.diff(startTime, 'minutes');

    const randomMinute = Math.floor(Math.random() * diffMinutes);

    const randomTime = startTime.add(randomMinute, 'minutes');

    return randomTime.format("HH:mm");
}

module.exports = {
    getRandomHourWithinActiveHours
};