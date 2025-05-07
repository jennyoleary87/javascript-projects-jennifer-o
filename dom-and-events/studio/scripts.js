// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {
    const buttonTakeOff = document.getElementById('takeoff');
    const buttonLanding = document.getElementById('landing');
    const buttonAbort = document.getElementById('missionAbort');
    const buttonUp = document.getElementById('up');
    const buttonDown = document.getElementById('down');
    const buttonRight = document.getElementById('right');
    const buttonLeft = document.getElementById('left');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');

    buttonTakeOff.addEventListener('click', (event) => {
        let confirmTakeOff = confirm('\nConfirm that the shuttle is ready for takeoff\n');
        if (!confirmTakeOff) {
            event.preventDefault();
            return;
        }
        flightStatus.textContent = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = 'blue';
        shuttleHeight.textContent = '10000';

    })

    buttonLanding.addEventListener('click', () => {
        let alertLand = alert('The shuttle is landing. Landing gear engaged');
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.textContent = '0';

    })

    buttonAbort.addEventListener('click', () => {
        let confirmAbort = confirm('\nConfirm that you want to abort the mission.\n');
        if (!confirmAbort) {
            flightStatus.textContent = "Mission Aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.textContent = '0';

        }
    })

    buttonUp.addEventListener('click', () => {

    })

    buttonDown.addEventListener('click', () => {

    })

    buttonLeft.addEventListener('click', () => {

    })

    buttonRight.addEventListener('click', () => {

    })

});
