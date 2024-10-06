import { Request, Response } from "express";
import prisma from "../../../prisma";


export const signInUser = async (req: Request, res: Response) => {

    const {email, password} = req.body;

    const findUser = await prisma.user.findFirst(
        {
            where: {
                email: email,
                password: password
            },
        }
    )
    if (findUser)
        return res.json(findUser).status(200)
    else 
        return res.status(400).json('error');
}