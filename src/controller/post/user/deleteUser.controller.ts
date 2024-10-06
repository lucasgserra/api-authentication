import { Request, Response } from "express";
import prisma from "../../../prisma";


export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.body;

    const findUser = await prisma.user.findFirst(
        {
            where: {
                id: id
            }
        }
    )
    if (findUser) {
        await prisma.user.delete(
            {
                where: {
                    id: id
                }
            }
        );
        return res.json("success to delete user!")
    } else return res.json("user not found!")
}