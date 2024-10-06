import { Request, Response } from "express";
import prisma from "../../../prisma";


export const createUser = async (req: Request, res: Response) => {
    const {name, email, password, role} = req.body;

    const existsUser = await prisma.user.findFirst({where:{email: email}});
    if (existsUser) {
        res.status(400)
        return res.json({"error":"email already exists!"})
    }
    const newUser = await prisma.user.create({data:{name, email, password, role}})
    return res.json(newUser);
}