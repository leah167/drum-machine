// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');

//metronome count display
let metCountDisplay = document.querySelector("#count-display");

// change count input
let changeCount = document.querySelector("#count-input");

//metronome count
let metCount = 0;

//sound timing
let kickTiming = document.querySelector("#kick-drum-timing");
let snareTiming = document.querySelector("#snare-drum-timing");
let hiTiming = document.querySelector("#hi-hat-timing");

//checkboxes
let metPlay = document.querySelector("#metronome-checkbox");
let kickPlay = document.querySelector("#kick-checkbox");
let snarePlay = document.querySelector("#snare-checkbox");
let hiPlay = document.querySelector("#hi-checkbox");

// This function is called every 600ms
function update() {
    

    if (metCount === Number(changeCount.value) ) {
       metCount = 0;
      
    }
    metCount ++;
    console.log(metCount);
    metChecker();
    kickChecker();
    snareChecker();
    hiChecker();
    metCountDisplay.innerText = "Count: " + metCount;
}

function metChecker() {
    if (metPlay.checked) {
        if (metCount < 4) {
            tick.load();
            tick.play();
        }

        if (metCount % 4 === 0) {
            tock.load();
            tock.play();
        }
    }
}

function kickChecker() {
    if (kickPlay.checked) {
        if (Number(kickTiming.value) === metCount) {
            kickDrum.load();
            kickDrum.play();
        }
    }
    
}

function snareChecker() {
    if (snarePlay.checked) {
       if (Number(snareTiming.value) === metCount) {
           snareDrum.load();
           snareDrum.play();
        }
    }
}

function hiChecker() {
    if (hiPlay.checked) {
        if (Number(hiTiming.value) === metCount) {
            hiHat.load();
            hiHat.play();
        }
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
