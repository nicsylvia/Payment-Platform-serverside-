import { model, Schema, Document } from "mongoose";

import { LocksData } from "../AllInterfaces/AllInterface"

interface MainLocksData extends LocksData, Document{}

const SafeLocksSchema = new Schema<LocksData>({
    amount: {
        type: Number,
    },
    lock: {
        type: Boolean
    },
    PayBackTime: {
        type: String
    },
    interest: {
        type: Number
    },
    title: {
        type: String
    }
},
{
    timestamps: true
});

const SafeLocksModels = model<MainLocksData>("SafeLocks", SafeLocksSchema);

export default SafeLocksModels