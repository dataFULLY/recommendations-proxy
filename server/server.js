require('newrelic');
const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 3000;

app.use(morgan('tiny'));
app.use('/listing/:listing', express.static('public'));
app.use(express.static('public'));


app.use('/api/listing/:listing', (req, res) => {
  let { id } = req.params;
  if (!id) {
    id = 0;
  }
  res.redirect(`http://ec2-54-200-65-2.us-west-2.compute.amazonaws.com:3005/api/listing/${id}`);
});

app.listen(port);