const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save-data', (req, res) => {
    const { name, email } = req.body;

    // Přečtěte existující soubor
    fs.readFile('public/data.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Chyba při čtení souboru');
        }

        // Přidejte nová data do existujícího obsahu
        const newData = `\nconst user = { name: "${name}", email: "${email}" };`;
        const updatedData = data + newData;

        // Uložte aktualizovaný obsah zpět do souboru
        fs.writeFile('public/data.js', updatedData, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Chyba při zápisu do souboru');
            }
            res.send('Data byla úspěšně uložena');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
