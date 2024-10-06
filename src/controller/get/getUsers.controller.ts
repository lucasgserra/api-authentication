import { Request, Response } from "express";
import prisma from "../../prisma";


export const getUsers = async (req: Request, res: Response) => {
    return res.json(await prisma.user.findMany());
}