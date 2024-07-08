
/* Detect position */
const handleOrientation = (data) => {
  const {alpha, beta, gamma} = data
console.log(alpha, gamma, beta);

const surfer = document.getElementById('surfer')

surfer.style.transform=`translateX(${(beta ?? 0) * 10}px)`;
}


window.addEventListener("deviceorientation", handleOrientation);
