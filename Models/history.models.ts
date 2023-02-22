import mongoose, { model, Schema } from "mongoose";
import { HistoryData, WalletData } from "../AllInterfaces/AllInterface";

interface MainHistoryData extends HistoryData, Document{};

const HistorySchema = new Schema<HistoryData>({
    message: {
        type: String
    },
    transactionReference: {
        type: Number
    },
    transactionType: {
        type: Boolean
    }
}, 
{
    timestamps: true
});

const HistoryModels = model<MainHistoryData>("Histories", HistorySchema);

export default HistoryModels