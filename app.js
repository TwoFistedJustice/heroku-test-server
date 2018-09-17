const express = require('express');
const hbs = require('hbs');
// const fs = require('fs');


const app = express();

// for heroku or default
const port = process.env.PORT || 3000;


// route properties
const homeProps = {
  pageTitle: 'Russ\'s cute little practice server app',
  text: 'Little server app built on Node and Express'
};
const aboutProps = {
  pageTitle: 'Why did Russ build this silly little app?',
  text: 'Because it demanded to be built! That\'s why!'
};

//register reusable templates
hbs.registerPartials(__dirname + '/views/partials');
app.set('views engine', 'hbs');




//keep all loggers and blocker ABOVE this line
app.use(express.static(__dirname + './public'));



//register routes
app.get('/', (request, response) => {
  response.render('home.hbs', homeProps)
});



app.get('/about', (request, response)=>{
  response.render('about.hbs', aboutProps);
});

app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});

