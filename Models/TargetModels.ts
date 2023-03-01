import { model, Schema, Document } from "mongoose";

import { TargetData } from "../AllInterfaces/AllInterface"

interface MainTargetData extends TargetData, Document{};

const TargetSchema = new Schema<TargetData>(
	{
		amount: {
			type: Number,
		},

		targetValue: {
			type: Boolean,
		},

		fixedAmount: {
			type: Number,
		},

		interest: {
			type: Number,
		},
		dateTime: {
			type: String,
		},

		title: {
			type: String,
		},
	},
	{ timestamps: true },
);

const TargetModels = model<MainTargetData>("Targets", TargetSchema);

export default TargetModels