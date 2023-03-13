const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const name = nameInput.value;

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })
  .then(response => response.json())
  .then(data => {
    const message = `Hello, ${data.name}!`;
    const greeting = document.createElement('p');
    greeting.textContent = message;
    document.body.appendChild(greeting);
  });
});
