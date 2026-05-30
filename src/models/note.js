import { model, Schema } from "mongoose";

const noteShema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: false,
            default: true,
            trim: true,
        },
        tag: {
            type: String,
            enum: ["Work", "Personal", "Meeting", "Shopping", "Ideas", "Travel", "Finance", "Health", "Important", "Todo"],
            required: false,
            default: "Todo",
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const Note = model('Note', noteShema);