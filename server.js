//global variables and requirements

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize our app to create a port
const app = express();
const PORT = process.env.PORT || 3000;



//body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//initialize server
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));