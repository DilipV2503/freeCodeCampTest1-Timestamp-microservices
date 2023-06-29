const express = require('express');
const app = express();

app.get('/api/:date?', (req, res) => {
  const { date } = req.params;

  let currentDate;
  if (!date) {
    currentDate = new Date();
  } else if (/^\d+$/.test(date)) {
    currentDate = new Date(parseInt(date));
  } else {
    currentDate = new Date(date);
  }

  if (currentDate.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  const unixTimestamp = currentDate.getTime();
  const utcString = currentDate.toUTCString();

  res.json({ unix: unixTimestamp, utc: utcString });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
