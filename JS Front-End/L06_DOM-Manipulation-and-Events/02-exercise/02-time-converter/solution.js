function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

    function convertDays() {
        let days = Number(document.getElementById('days').value);
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertHours() {
        let hours = Number(document.getElementById('hours').value);
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertMinutes() {
        let minutes = Number(document.getElementById('minutes').value);
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
    }

    function convertSeconds() {
        let seconds = Number(document.getElementById('seconds').value);
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
    }
}