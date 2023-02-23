import { UserData } from "../AllInterfaces/AllInterface";
import { Response, Request } from "express";
import UserModels from "../Models/user.models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import WalletModels from "../Models/wallet.models";
import mongoose from "mongoose";
import HistoryModels from "../Models/history.models"

// RegisterUsers
export const RegisterUsers = async(req: Request<{}, {}, UserData>, res: Response): Promise<Response> =>{
    try {
        const {name, email, password, phoneNumber, userName} = req.body;

        const saltedPassword = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltedPassword);

        const dater = Date.now();

        const num = 234

        const GenerateAccountNumber = Math.floor(Math.random() * 78) + dater

        const user = await UserModels.create({
            name,
            email,
            userName,
            phoneNumber: num + phoneNumber,
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
};

// TRANSFER TO ANOTHER WALLET AND RECEIVER MONEY:
export const MakeTransfer = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const { accountNumber, amount } = req.body;

        const GenerateTransactionReference = Math.floor(Math.random() * 6745689743) + 243;

        // RECEIVER ACCOUNT:
        const getReciever = await UserModels.findOne({accountNumber});

        const getRecieverWallet = await WalletModels.findById(getReciever?._id);

        // SENDER ACCOUNT: 
        const getUser = await UserModels.findById(req.params.userID);
        const getUserWallet = await WalletModels.findById(req.params.walletID);

        if (getUser && getReciever) {
            if (amount > getUserWallet?.Balance!) {
                return res.status(400).json({
                    message: "Insufficient Funds"
                })
            } else {
                // Updating the sender wallet to receive the debit alert
                await WalletModels.findByIdAndUpdate(
                    getUserWallet?._id,
                    {
                        Balance: getUserWallet?.Balance! - amount,
                        credit: 0,
                        debit: amount,
                    }
                );

                // Create the receipt/history of your transaction:
                const createSenderHistory = await HistoryModels.create({
                    message: `You have sent ${amount} to ${getReciever.name}`,
                    transactionReference: GenerateTransactionReference,
                    transactionType: "Debit"
                });

                getUser.history.push(
                    new mongoose.Types.ObjectId(createSenderHistory?._id)
                );
                getUser.save();

                // Updating the receiver wallet to receive the credit alert:
                await WalletModels.findByIdAndUpdate(
                    getRecieverWallet?._id,
                    {
                        Balance: ,
                        credit: amount,
                        debit: 0,
                    }
                )
            }
        } else {
            return res.status(404).json({
                message: "Account not found",
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: "An error occured",
            data: error
        })
    }
}