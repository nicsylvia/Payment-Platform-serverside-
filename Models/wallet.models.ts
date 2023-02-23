import mongoose, { model, Schema, Document } from "mongoose";
import { WalletData } from "../AllInterfaces/AllInterface";

interface MainWalletData extends WalletData, Document{};

const WalletSchema = new Schema<WalletData>({
    Balance: {
        type: Number
    },
    debit: {
        type: Number
    },
    credit: {
        type: Number
    }
}, 
{
    timestamps: true
});

const WalletModels = model<MainWalletData>("Users-Wallets", WalletSchema);
export default WalletModels