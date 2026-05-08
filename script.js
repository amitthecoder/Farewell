// Countdown Timer: calculates time left till 16 May 2026
function countdown() {
  // Adjust the event date as needed
  const eventDate = new Date('2026-05-16T19:00:00'); // 7pm IST or edit as needed
  const now = new Date();
  let diff = eventDate - now;

  if (diff < 0) diff = 0;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;
}

setInterval(countdown, 1000);
countdown();

// RSVP Form validation & submission
const form = document.getElementById('rsvp-form');
const nameInput = document.getElementById('name');
const rollNumberInput = document.getElementById('roll-number');
const nameError = document.getElementById('name-error');
const rollNumberError = document.getElementById('roll-number-error');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
  let valid = true;

  // Reset error messages
  nameError.textContent = '';
  rollNumberError.textContent = '';
  successMessage.textContent = '';
  form.classList.remove('submitted');

  // Validate name
  const nameVal = nameInput.value.trim();
  if (!nameVal || nameVal.length < 2) {
    nameError.textContent = 'Please enter your full name.';
    valid = false;
  }

  // Validate roll number
  const rollNumberVal = rollNumberInput.value.trim();
  if (!rollNumberVal || !/^\d{1,10}$/.test(rollNumberVal)) {
    rollNumberError.textContent = 'Enter a valid roll number (1 to 10 digits).';
    valid = false;
  }

  if (!valid) {
    e.preventDefault();
  }
});
