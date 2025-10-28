

require('dotenv').config(); 

const express = require('express');
const connectDB = require('./db');

connectDB();

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());


app.get('/', (req, res) => {
    res.send('GameTracker  funcionando listo para conectar a monngooDB y crear modelos.');
});



app.listen(PORT, () => {
    console.log(`Servidorr corriendo en el puerto ${PORT}`);
});