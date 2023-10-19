import express from "express";

const app = express();

app.get('/users/:id', (req, res) =>{
    return res.send('Get user');
})

app.post('/users/:id', (req, res) =>{
    return res.send('Create user');
})

app.put('/users/:id', (req, res) =>{

    return res.send('Update user');
})

app.delete('/users/:id', (req, res) =>{
    return res.send('Delete user');
})

app.listen(4000, () =>{
    console.log("Server Running");
})