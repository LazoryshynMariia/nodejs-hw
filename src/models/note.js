import { model, Schema } from "mongoose";

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: false,
            default: "",
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

noteSchema.index({ title: 'text', content: 'text' });

export const Note = model('Note', noteSchema);
