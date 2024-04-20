const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/sum/', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2
    res.send(sum.toString());
})

app.get('/principal-interest/', (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const si  = (principal* (rate / 100 )) * time
    res.status(200).json({ initial : principal , totalAmount : si + principal })
})

app.listen(3000)