const form = document.getElementById('resume-form') as HTMLFormElement;
const dynamicResume = document.getElementById('dynamic-resume') as HTMLElement;

const dynamicName = document.getElementById('dynamic-name') as HTMLElement;
const dynamicEmail = document.getElementById('dynamic-email') as HTMLElement;
const dynamicPhone = document.getElementById('dynamic-phone') as HTMLElement;
const dynamicEducation = document.getElementById('dynamic-education') as HTMLElement;
const dynamicSkills = document.getElementById('dynamic-skills') as HTMLElement;

// Add event listener for the submit button
const submitButton = document.getElementById('whatsapp-submit') as HTMLButtonElement;
submitButton.addEventListener('click', (e: Event) => {
  e.preventDefault();

  // Capture Form Values
  const nameInput = (document.getElementById('name-input') as HTMLInputElement).value.trim();
  const emailInput = (document.getElementById('email-input') as HTMLInputElement).value.trim();
  const phoneInput = (document.getElementById('phone-input') as HTMLInputElement).value.trim();
  const educationInput = (document.getElementById('education-input') as HTMLInputElement).value.trim();
  const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value.trim();

  // Validation
  if (!nameInput || !emailInput || !phoneInput || !educationInput || !skillsInput) {
    alert('Please fill in all fields.');
    return;
  }

  // Display captured data on the webpage (or handle as needed)
  dynamicName.textContent = `Name: ${nameInput}`;
  dynamicEmail.textContent = `Email: ${emailInput}`;
  dynamicPhone.textContent = `Phone: ${phoneInput}`;
  dynamicEducation.textContent = `Education: ${educationInput}`;
  dynamicSkills.textContent = `Skills: ${skillsInput}`;

  // Optionally, you can display a confirmation message here or reset the form
  alert('Details submitted successfully!');
  form.reset();
});
