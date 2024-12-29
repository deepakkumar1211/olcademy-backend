import { Product } from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getProduct = asyncHandler(async (req, res) => {
    try {
                
        const product = await Product.find()

        if (!product || product.length === 0) {
            new ApiResponse(404, {}, "No product found.")
        }

        return res.status(200).json(
            new ApiResponse(200, product, "Product retrieved successfully.")
        );
    } catch (error) {
        console.log(error);

        return res.status(500).json(
            new ApiResponse(500, {}, "Error in getting the product.")
        );
    }
});

// Add a review to a product
const addReview = async (req, res) => {
    try {
        
        const { productId } = req.params
        const { review } = req.body; // Review details from the request body

        // Validate input
        if (!review) {
            return res.status(400).json(
                new ApiResponse(400, {}, "review is required.")
            );
        }

        // Find the product by ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json(
                new ApiResponse(404, {}, "Product not found.")
            );
        }


        // Add the review to the product's reviews array
        product.review.push(review);

        // Save the updated product
        await product.save();

        return res.status(200).json(
            new ApiResponse(200, product, "Review added successfully.")
        );
    } catch (error) {
        console.error("Error adding review:", error);
        throw new ApiError(500, "Internal server error")
    }
};


export {getProduct, addReview}