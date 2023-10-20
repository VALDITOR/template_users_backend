import { Router } from "express";
import { getUsersById, createUsersById, updateUsersById, delateUserById } from "../controllers/usersController"

const router = Router();

router.get('/:id', getUsersById)

router.post('/:id', createUsersById)

router.put('/:id', updateUsersById)

router.delete('/:id', delateUserById)

export { router }