import { Product } from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Get all products
const getProduct = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});

        if (!products || products.length === 0) {
            return res.status(404).json(new ApiResponse(404, {}, "No product found."));
        }

        return res.status(200).json(
            new ApiResponse(200, products, "Products retrieved successfully.")
        );
    } catch (error) {
        console.error(error);
        return res.status(500).json(
            new ApiResponse(500, {}, "Error in getting the product.")
        );
    }
});



// Add a review to a product
const addReview = asyncHandler(async (req, res) => {
    try {
        const { productId } = req.params;
        const { review } = req.body;

        // Validate input
        if (!review) {
            return res.status(400).json(new ApiResponse(400, {}, "Review is required."));
        }

        // Find the product by ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json(new ApiResponse(404, {}, "Product not found."));
        }

        // Add the review to the product's review array
        product.review.push(review);

        // Save the updated product
        await product.save();

        return res.status(200).json(new ApiResponse(200, product, "Review added successfully."));
    } catch (error) {
        console.error("Error adding review:", error);
        return res.status(500).json(new ApiResponse(500, {}, "Internal server error"));
    }
});


const getProductDetails = asyncHandler(async (req, res) => {
    try {
        const { productId } = req.params;

        // Find the product by ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json(new ApiResponse(404, {}, "Product not found."));
        }

        // Send the product details
        return res.status(200).json(new ApiResponse(200, product, "Product details fetched successfully."));
    } catch (error) {
        console.error("Error fetching product details:", error);
        return res.status(500).json(new ApiResponse(500, {}, "Internal server error"));
    }
});


export { 
    getProduct,
    addReview,
    getProductDetails
};

