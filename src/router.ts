import { Router } from "express";
import { createUser } from "./controller/post/user/createUser.controller";
import { getUsers } from "./controller/get/getUsers.controller";
import { getUserFromID } from "./controller/get/getUserFromID.controller";
import { deleteUser } from "./controller/post/user/deleteUser.controller";
import { signInUser } from "./controller/post/user/signInUser.controller";
import { changeUser } from "./controller/post/user/changeUser.controller";

export const router = Router();

//gets
router.get('/users', getUsers);
router.get('/users/:tagId', getUserFromID);

//posts
router.post('/create-user', createUser);
router.post('/delete-user', deleteUser);
router.post('/sign-in-user', signInUser);
router.post('/change-user', changeUser)