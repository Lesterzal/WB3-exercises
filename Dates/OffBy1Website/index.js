const dateInput = document.getElementById('date-input');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');

submitBtn.addEventListener('click', () => {
  const dateString = dateInput.value;
  const date = new Date(dateString);
  message.textContent = `Your Selected Date Is ${date.toString()}`;
});