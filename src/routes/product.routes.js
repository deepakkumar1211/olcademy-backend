import { Router } from "express";
import { getProduct, addReview, getProductDetails } from "../controllers/product.controller.js";

const router = Router()

router.route("/get-product").get(getProduct)

router.post("/:productId/review", addReview);

router.get("/product-details/:productId", getProductDetails);

export default router