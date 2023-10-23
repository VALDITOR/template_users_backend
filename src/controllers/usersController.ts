import { Request, Response } from "express";
import { Users } from "../models/Users";


const getUsersById = async (req: Request, res: Response) =>{

try{
    const userId = req.params.id

    const users = await Users.find();

    return res.send('Get user ' + userId);
} catch(error) {
    return res.send(error);
}}


const createUsersById = async (req: Request, res: Response) =>{
    console.log("created");
try{
    console.log(req.body.name);
    
    const newUser = await Users.create(
        {
        username: req.body.username,
        email: req.body.email
    }
)

    return res.send(newUser);
} catch(error) {
    return res.send(error);
}
}

const updateUsersById = (req: Request, res: Response) =>{
    return res.send('Update user');
    try{
    } catch(error) {
        return res.send(error);
    }
    }

const delateUserById = async (req: Request, res: Response) =>{
    try{
        const usersIdToDelete = req.params.id;
        const usersDeleted = await Users.delete({
            id:parseInt(usersIdToDelete)
        }
        ) 
        
    
    if (usersDeleted.affected){
        return res.send('Se ha eliminado correctamente el id ' + getUsersById)
    }
}   catch(error) {
        return res.send(error);
    }
}

    
export { getUsersById, createUsersById, updateUsersById, delateUserById };