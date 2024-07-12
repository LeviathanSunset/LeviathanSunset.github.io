const resizeContainer = document.getElementById('resize-container');
const paymentImg = document.getElementById('payment-img');
let resizeTimer;

resizeContainer.addEventListener('mousedown', function () {
  document.addEventListener('mousemove', resizeThrottler, false);
});

document.addEventListener('mouseup', function () {
  document.removeEventListener('mousemove', resizeThrottler, false);
});

function resizeThrottler() {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimer) {
    resizeTimer = setTimeout(function () {
      resizeTimer = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 100ms
    }, 100);
  }
}

function actualResizeHandler() {
  // Calculate the new size and update the image
  const size = resizeContainer.offsetWidth;
  const modSize = size % 5;
  const imgNumber = modSize + 1; // Assuming the images are named from 1 to 5
  paymentImg.src = `pics/qr${imgNumber}.jpg`;
}

