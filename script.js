
/* Timer */
let timerInterval;
let totalSeconds = 0;

const updateTimerDisplay = () => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('timer').innerText = 
        String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

const startTimer= () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            totalSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

startTimer()


/* Create object */
const createObject = (className, id) => {
  const newElement = document.createElement('div');
  newElement.classList.add(className);
  newElement.id = id
  document.body.appendChild(newElement);
}



/* # Ride Vertical #*/
/* Tube ride */
const {left: tubeLeft, right: tubeRight} = document.getElementById('tube').getBoundingClientRect()
console.log('TUBE',tubeLeft,tubeRight);





/* Detect position */
const handleOrientation = (data) => {
  const {alpha, beta, gamma} = data
console.log(alpha, gamma, beta);

const surfer = document.getElementById('surfer')
surfer.style.transform=`translateX(${(gamma ?? 0) * 10}px)`;

const {left: surferLeft, right: surferRight} = surfer.getBoundingClientRect()

console.log('SURFER',surferLeft, surferRight);


}


window.addEventListener("deviceorientation", handleOrientation);
