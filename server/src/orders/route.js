import express from "express";
import { createAOrder, getOrderByEmail } from "./controller.js";

const router = express.Router();


router.route("/email/:email").get(getOrderByEmail);

//create order endpoint
router.route("/").post(createAOrder);


export default router;
