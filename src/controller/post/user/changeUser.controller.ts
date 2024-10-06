import { Request, Response } from "express"
import prisma from "../../../prisma";

type IBody = {
    email: string;
    changes: IChanges;
}
type IChanges = {
    name: string;
    role: string;
    password: string;
}

export const changeUser = async (req: Request, res: Response) => {
    const {email, changes} : IBody = req.body;

    const findUser = await prisma.user.findFirst({where: {
        email
    }})
    if (findUser) {
        const {name, role, password} = changes;

        await prisma.user.update({
            where: {email},
            data: {
                name: name||findUser.name,
                role: role||findUser.role,
                password: password||findUser.password
            }
        })
        return res.status(200).json('success');

    } else return res.status(400).json('user not found');
}