const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/healt', (req,res) =>{
    res.send('hello por una vez mas');
});

app.listen(port, () => {
    console.log('server is running');
});