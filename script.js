/* Menu */
const btnStart = document.getElementById('btn-start')
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const lifeContainer = document.getElementById('life')

btnStart.addEventListener('click', () => {
  menu.style.display = 'none';
  rideContainer.style.display = 'block';
  timer()
})

/* Timer */
const timer = () => {
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
}


/* Create object */
const createObject = (className, id) => {
  const newElement = document.createElement('div');
  newElement.classList.add(className);
  newElement.id = id
  document.body.appendChild(newElement);
}


/* Detect position */
let surferLeft
let surferRight

let tubeLeft
let tubeRight

let life = 100

const handleOrientation = (data) => {
  const {alpha, beta, gamma} = data
  // console.log(alpha, gamma, beta);

  const surfer = document.getElementById('surfer')
  surfer.style.transform=`translateX(${(gamma ?? 0) * 10}px)`;

  const {left, right} = surfer.getBoundingClientRect()
  surferLeft = left
  surferRight = right
  console.log('SURFER',left, right);

  const {left: tubeL, right: tubeR} = document.getElementById('tube').getBoundingClientRect()
  console.log('TUBE',tubeL,tubeR);
  tubeLeft = tubeL
  tubeRight = tubeR

  /* # Ride Vertical #*/
/* Tube ride */

lifeContainer.textContent = life

if(life <= 0) {
  life = 0
}

if(surferLeft < tubeLeft || surferRight > tubeRight ){
  life = life - 1
  lifeContainer.textContent = life
}

}
window.addEventListener("deviceorientation", handleOrientation);





