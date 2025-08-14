const express = require('express');
const colors = require('colors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// راوت الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send('Welcome to My Book Store API');
});

// تحميل كل الراوتات من فولدر routes
fs.readdirSync(path.join(__dirname, 'routes')).forEach(file => {
  const route = require(`./routes/${file}`);
  const routeName = `/${file.replace('.js', '')}`;
  app.use(routeName, route);
  console.log(`Route loaded: ${routeName}`.green);
});

// تشغيل السيرفر بالرابط كامل
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000'.rainbow);
});
