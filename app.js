const express = require('express')
const app = express();

app.get('/', (req, res) =>{
  var i = 0;
  var message = ''
  do {
    i += 1;
    if(i % 2 == 0)
      message += '<p>' + i + ' Soy Par!</p>'
    else
      message += '<p>' + i + ' Soy Impar!</p>'
  } while (i < 50);
  res.send(message);
});

app.listen(3000, () => console.log('listening 3000'));
