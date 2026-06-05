/*
 * Booking form
 * Prevents the default HTML behaviour (page reload on submit).
 * Validates using the built-in Constraint Validation API.
 * On successful validation, the form is hidden and the
 * confirmation message is shown.
 */
const form = document.getElementById('booking-form');
const conf = document.getElementById('form-confirmation');

/* Set the minimum allowed date to today */
document.getElementById('date').setAttribute('min', new Date().toISOString().split('T')[0]);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  form.style.display = 'none';
  conf.classList.add('show');
});
