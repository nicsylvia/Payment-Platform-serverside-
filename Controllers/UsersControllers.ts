import { UserData } from "../AllInterfaces/AllInterface";
import { Response, Request } from "express";
import UserModels from "../Models/user.models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// RegisterUsers
export const RegisterUsers = async(req: Request<{}, {}, UserData>, res: Response): Promise<Response> =>{
    try {
        const {name, email, password, history, userName} = req.body;

        const saltedPassword = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltedPassword);

        const dater = Date.now();

        const GenerateAccountNumber = Math.floor(Math.random() * 78) + dater

        const user = await UserModels.create({
            name,
            email,
            userName,
            password: hashedPassword,
            verified: true,
            accountNumber: GenerateAccountNumber
        })
        return res.status(200).json({
            message: "Successfully created user",
            data: user,
            token: jwt.sign({ _id: user._id }, "dhfufrr-fhfrgshcuiei-vriisiwowuhcb")
        })
    } catch (error) {
        return res.status(404).json({
            message: "An error occured",
            data: error
        })
    }
}