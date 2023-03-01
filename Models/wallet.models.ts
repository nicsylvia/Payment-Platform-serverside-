import mongoose, { model, Schema, Document } from "mongoose";
import { WalletData } from "../AllInterfaces/AllInterface";

interface MainWalletData extends WalletData, Document{};

const WalletSchema = new Schema<WalletData>({
    Owner: {
        type: String,
    },
    Balance: {
        type: Number
    },
    debit: {
        type: Number
    },
    credit: {
        type: Number
    },
    quickSave: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "QuickSaves"
        }
    ],
    saveLock: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SafeLocks"
        }
    ],
    Target: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Targets"
        }
    ],
}, 
{
    timestamps: true
});

const WalletModels = model<MainWalletData>("Users-Wallets", WalletSchema);
export default WalletModels