const express = require('express');
const colors = require('colors');
const title = require('./title.js'); 
const fastBomber = require('./sms.js');
const app = express();
const port = 3000;
app.get('/api', (req, res) => {
  const telefon = req.query.telefon;
  const miktar = req.query.miktar; 
  if (!telefon || telefon.length !== 10) {
    return res.status(400).json({ error: 'Telefon Numarasi 10 Haneli Olmalidir. Ex: 5xxxxxxxxx' });
  }
  if (!miktar || isNaN(miktar)) {
    return res.status(400).json({ error: 'Lutfen Geçerli Bir Miktar Giriniz' });
  }
  title('Hosgeldiniz Github https://github.com/kdmldeveloper/sms-bomber-api');
  title('Numara: ' + telefon);
  title(`Gsm: ${telefon} - Gönderilecek Miktar: ${miktar}`);

  console.log('SMS Gönderiliyor...'.blue);
  fastBomber(telefon, miktar);
  res.json({
    message: `SMS'ler başarıyla gönderiliyor: ${telefon} - Miktar: ${miktar}`,
  });
});
app.listen(port, () => {
  console.log(`Server çalışıyor: http://localhost:${port}`);
});
