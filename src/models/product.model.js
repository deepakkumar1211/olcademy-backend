import mongoose, {Schema} from "mongoose";


const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        productImage: [
            {
                type: String, // cloudinary url
                required: true
            }
        ],
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            default: 0
        },
        size: {
            type: String,
            required: true
        },
        review: [
            {
                type: String,
                default: ""
            }
        ],
    },
    {timestamps: true
    }
)


export const Product = mongoose.model("Product", productSchema)
