import { Request, Response } from "express";


const getUsersById = (req: Request, res: Response) =>{
    const userId = req.params.id

    return res.send('Get user ' + userId);
}

const createUsersById = (req: Request, res: Response) =>{
    console.log("created");

    console.log(req.body.name);
    

    return res.send('Create user');
}

const updateUsersById = (req: Request, res: Response) =>{
    return res.send('Update user');
}

const delateUserById = (req: Request, res: Response) =>{
    return res.send('Delete user');
}

export { getUsersById, createUsersById, updateUsersById, delateUserById };