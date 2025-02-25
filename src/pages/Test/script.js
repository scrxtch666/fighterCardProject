document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const data = {
      name: name,
      email: email
  };

  fetch('/save-data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(data => {
      alert(data);
  })
  .catch((error) => {
      console.error('Chyba:', error);
  });
});
