window.onload = function () {
    setInterval(clock, 1000);
};


let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let dayOfWeek = date.getDay();
    let dayNum = date.getDate();
    let month = date.getMonth();
    let segs = date.getSeconds();

    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    segs = segs < 10 ? "0" + segs : segs;

    if (dayOfWeek == 0) {
        dayOfWeek = `Sunday`;
    } else if (dayOfWeek == 1) {
        dayOfWeek = `Monday`;
    } else if (dayOfWeek == 2) {
        dayOfWeek = `Tuesday`;
    } else if (dayOfWeek == 3) {
        dayOfWeek = `Wednesday`;
    } else if (dayOfWeek == 4) {
        dayOfWeek = `Thursday`;
    } else if (dayOfWeek == 5) {
        dayOfWeek = `Friday`;
    } else if (dayOfWeek == 6) {
        dayOfWeek = `Saturday`;
    }

    if (month == 0) {
        month = `January`;
    } else if (month == 1) {
        month = `February`;
    } else if (month == 2) {
        month = `March`;
    } else if (month == 3) {
        month = `April`;
    } else if (month == 4) {
        month = `May`;
    } else if (month == 5) {
        month = `June`;
    } else if (month == 6) {
        month = `July`;
    } else if (month == 7) {
        month = `August`;
    } else if (month == 8) {
        month = `September`;
    } else if (month == 9) {
        month = `October`;
    } else if (month == 10) {
        month = `November`;
    } else if (month == 11) {
        month = `December`;
    }


    let time = `${hrs}:${mins}`
    let day = `${dayOfWeek}, ${month} ${dayNum}`



    document.querySelector('.whatTime').innerText = time;
    document.querySelector('.whatDay').innerText = day;

}
clock();


const spring = new Date(2021, 2, 21);
const summer = new Date(2021, 5, 21);
const fall = new Date(2021, 8, 21);
const winter = new Date(2021, 11, 21);

const tillSpring = (time = (new Date).getTime()) => {

    const date = new Date(time);


    let timeSpring = spring.getTime();
    let timeSummer = summer.getTime();
    let timeFall = fall.getTime();
    let timeWinter = winter.getTime();

    let timedate = date.getTime();
    let currentMonth = date.getMonth();
    let currentDay = date.getDate();
    let hoursTillMidnight = date.getHours();
    let minsTillNextHour = date.getMinutes();

    let daysLeftTillSpring = Math.floor((timeSpring - timedate) / 1000 / 3600 / 24);
    // let daysLeftTillSummer = Math.floor((timeSummer - timedate) / 1000 / 3600 / 24);
    // let daysLeftTillFall = Math.floor((timeFall - timedate) / 1000 / 3600 / 24);
    // let daysLeftTillWinter = Math.floor((timeWinter - timedate) / 1000 / 3600 / 24);
    // let daysLeftTill = '';

    let hoursLeft = (23 - hoursTillMidnight);
    let minutesLeft = (60 - minsTillNextHour);

    // if ((currentMonth == 8 && currentDay >= 21) || currentMonth == 9 || currentMonth == 10 || (currentMonth == 11 && currentDay < 21)) {
    //     nextSeason = 'winter';
    // } else if ((currentMonth == 11 && currentDay >= 21) || currentMonth == 0 || currentMonth == 1 || (currentMonth == 2 && currentDay < 21)) {
    //     nextSeason = 'spring';
    // } else if ((currentMonth == 2 && currentDay >= 21) || currentMonth == 3 || currentMonth == 4 || (currentMonth == 5 && currentDay < 21)) {
    //     nextSeason = 'summer';
    // } else if ((currentMonth == 5 && currentDay >= 21) || currentMonth == 6 || currentMonth == 7 || (currentMonth == 8 && currentDay < 21)) {
    //     nextSeason = 'fall';
    // }



    let countdown = `${daysLeftTillSpring} days, ${hoursLeft} hours,  ${minutesLeft} minutes left until spring.`
    document.querySelector('.countdown').innerText = countdown;

};

tillSpring();

