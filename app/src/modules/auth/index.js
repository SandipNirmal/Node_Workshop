import express from "express";
import { authenticateUser } from "./controller";
import { loginSchema } from "./schemaValidator";

const router = express.Router();

router.post("/", loginSchema, authenticateUser);

export default router;
