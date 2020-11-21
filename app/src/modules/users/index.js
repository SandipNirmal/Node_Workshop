import express from "express";
import { registerNewUser } from "./controller";

const router = express.Router();

router.post("/", registerNewUser);

export default router;
