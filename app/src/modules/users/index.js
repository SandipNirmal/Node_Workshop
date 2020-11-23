import express from "express";
import { registerNewUser } from "./controller";
import { createUser } from "./schemaValidator";

const router = express.Router();

router.post("/", createUser, registerNewUser);

// TODO - Add Get profile, Edit

export default router;
