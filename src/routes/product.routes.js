import { Router } from "express";
import { getProduct, addReview } from "../controllers/product.controller.js";

const router = Router()

router.route("/get-product").get(getProduct)

router.post("/:productId/review", addReview);

export default router