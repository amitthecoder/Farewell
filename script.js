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
  e.preventDefault();
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
  if (!rollNumberVal || !/^[a-zA-Z0-9-]{4,20}$/.test(rollNumberVal)) {
    rollNumberError.textContent = 'Enter a valid roll number (4-20 letters, numbers, or hyphen).';
    valid = false;
  }

  if (valid) {
    // Simulate saving (here: use localStorage as a demo)
    const entry = {
      name: nameVal,
      rollNumber: rollNumberVal,
      ts: new Date().toISOString(),
    };
    let existing = [];
    try {
      existing = JSON.parse(localStorage.getItem('farewell_rsvp') || '[]');
    } catch { existing = []; }
    existing.push(entry);
    localStorage.setItem('farewell_rsvp', JSON.stringify(existing));

    // Show success, reset form
    form.classList.add('submitted');
    successMessage.textContent = `Thank you, ${nameVal}! Your RSVP has been recorded.`;

    form.reset();
    setTimeout(() => {
      form.classList.remove('submitted');
      successMessage.textContent = '';
    }, 7000);
  }
});
