import express from "express";
import { movies } from "../controller/dataModelController.js";
const router = express.Router();

router.get("/movies", movies);

export default router;
