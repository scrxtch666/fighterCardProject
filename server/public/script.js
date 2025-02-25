document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bio = document.getElementById('bio').value;

    const data = {
        name: name,
        age: age,
        weight: weight,
        height: height,
        bio: bio
    };

    fetch('http://localhost:4000/save-data', {  // Odesílání dat na Node server na portu 4000
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

//console.log("Test");
