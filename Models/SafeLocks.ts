import { model, Schema, Document } from "mongoose";

import { LocksData } from "../AllInterfaces/AllInterface"

interface MainLocksData extends LocksData, Document{}

const SafeLocksSchema = new Schema<LocksData>({
    
})