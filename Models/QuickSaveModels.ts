import { Document, Schema, model} from "mongoose";

import { QuickSaveData } from "../AllInterfaces/AllInterface"

interface MainQuickSaveData extends QuickSaveData, Document{};

const QuickSaveDataSchema = new Schema<QuickSaveData>({
    amount: {
        type: Number
    },
    autosave: {
        type: Boolean
    },
    dateTime: {
        type: Number || String
    },
    interest: {
        type: Number
    }
},
{
    timestamps:true
});

const QuickSaveModels = model<MainQuickSaveData>("QuickSaves", QuickSaveDataSchema);

export default QuickSaveModels