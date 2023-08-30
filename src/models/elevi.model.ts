import mongoose, { Schema, Types } from "mongoose";

const EleviSchema: Schema = new Schema({
    _id: {
        type: Types.ObjectId
    },
    name: {
        type: String,
        required: true,
    },
    varsta: {
        type: Number,
        required: true,
    }
})

export default mongoose.model("Elevi", EleviSchema)