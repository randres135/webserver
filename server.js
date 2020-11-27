const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers');
 
app.use(express.static(__dirname+'/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;


app.get('/', function (req, res) {

    res.render('home',{
        nombre:'Abel',
        anio: new Date().getFullYear()
    });
})
 

app.get('/about', function (req, res) {

    res.render('about',{
        anio: new Date().getFullYear()
    });
})
app.listen(port,()=>{
    console.log(`Escuchando puerto ${port}`);
})