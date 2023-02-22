import { UserData } from "../AllInterfaces/AllInterface";
import { Response, Request } from "express";
import UserModels from "../Models/user.models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import WalletModels from "../Models/wallet.models";
import mongoose from "mongoose";

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

        const userWallet = await WalletModels.create({
            _id: user?._id,
            Balance: 1000,
            credit: 0,
            debit: 0
        });

        user?.wallet.push(new mongoose.Types.ObjectId(userWallet?._id));
        user.save();

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