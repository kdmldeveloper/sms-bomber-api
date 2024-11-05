const express = require('express');
const colors = require('colors');
const title = require('./modules/title.js'); 
const fastBomber = require('./modules/sms.js');
const app = express();
const port = 3000;
app.get('/send-sms', (req, res) => {
  const telefon = req.query.telefon;
  const miktar = req.query.miktar; 
  if (!telefon || telefon.length !== 10) {
    return res.status(400).json({ error: 'Telefon Numarasi 10 Haneli Olmalidir. Ex: 5401234521' });
  }
  if (!miktar || isNaN(miktar)) {
    return res.status(400).json({ error: 'Lutfen Geçerli Bir Miktar Giriniz' });
  }
  title('Hosgeldiniz');
  title('Numara: ' + telefon);
  title(`Telefon: ${telefon} - Miktar: ${miktar}`);

  console.log('SMS Gonderiliyor...'.blue);
  fastBomber(telefon, miktar);
  res.json({
    message: `SMS'ler başarıyla gönderiliyor: ${telefon} - Miktar: ${miktar}`,
  });
});
app.listen(port, () => {
  console.log(`Server çalışıyor: http://localhost:${port}`);
});
