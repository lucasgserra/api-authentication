import { Request, Response } from "express";
import prisma from "../../prisma";


export const getUserFromID = async (req: Request, res: Response) => {
    const id = Number.parseInt(req.params.tagId);
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        if (user) 
            return res.json(user);
        else{
            res.status(400);    
            return res.json({"error":"user not found!"});
        }
    } catch (error) {
        return res.json(error)
    }
}