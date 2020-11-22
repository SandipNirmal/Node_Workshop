import express from "express";
import { Auth, Users, Tweets } from "../../modules";

const router = express.Router();

router.use("/auth", Auth);
router.use("/users", Users);
router.use("/tweets", Tweets);

const status = (req, res) => {
  res.status(200).json({ message: "Services running normally." });
};

router.get("/status", status);

export default router;
