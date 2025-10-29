

 require('dotenv').config(); 

const express = require('express');
const connectDB = require('./db');

connectDB();

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());

app.use(' /api/juegos', require('./routes/juegos'));

app.get('/', (req, res) => {

    res.send('GameTracker API funcionandooo.');
});


app.listen(PORT, () => {
    
    console.log(`Servidorr corriendo en el puerto ${PORT}`);

});