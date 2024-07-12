let isResizing = false;
let lastDownX = 0;

// Listen for the mousedown or touchstart event
resizeContainer.addEventListener('mousedown', startResize);
resizeContainer.addEventListener('touchstart', startResize);

function startResize(e) {
  isResizing = true;
  lastDownX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
}

// Listen for the mousemove or touchmove event
window.addEventListener('mousemove', resize);
window.addEventListener('touchmove', resize);

function resize(e) {
  if (!isResizing) 
    return;
  
  const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  
  // Calculate the new width of the container
  const newWidth = resizeContainer.offsetWidth + (clientX - lastDownX);
  resizeContainer.style.width = newWidth + 'px';
  
  // Update the last X position
  lastDownX = clientX;
}

// Listen for the mouseup or touchend event
window.addEventListener('mouseup', stopResize);
window.addEventListener('touchend', stopResize);

function stopResize() {
  isResizing = false;
}