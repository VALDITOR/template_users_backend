import express from "express";

import { router } from "./routes/userRoutes"
import { AppDataSource } from "./db";

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.json())

app.use('/users', router)

AppDataSource.initialize()
.then(() => {
 console.log('Database connected');
})
.catch(error => {
 console.log(error)
})

app.listen(PORT, () =>{
    console.log(`Server Running ${PORT}`);
})