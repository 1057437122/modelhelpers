import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";
const AreaSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    flag: {
        // for localize
        type: String,
        trim: true,
        required: () => {
            return this.parentId
        }
    },
    parentId: {
        type: ObjectId,
        ref: 'Area',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, toJSON: { virtuals: true } })
AreaSchema.virtual('parent', {
    ref: 'Area',
    localField: 'parentId',
    foreignField: '_id',
    justOne: true,
})
// we have to create a Validate function!!
const AreaModel = mongoose.model('Area', AreaSchema);

export { AreaModel }
