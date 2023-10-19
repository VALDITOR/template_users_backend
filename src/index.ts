import express from "express";

const app = express();

app.get('/users/:id', (req, res) =>{
    return res.send('Get Films');
})

app.post('/users/:id', (req, res) =>{
    return res.send('Create Films');
})

app.put('/users/:id', (req, res) =>{
    const filmsId = req.params.id

    return res.send('Update Films ' + filmsId);
})

app.delete('/users/:id', (req, res) =>{
    return res.send('Delete Films');
})

app.listen(4000, () =>{
    console.log("Server Running");
})