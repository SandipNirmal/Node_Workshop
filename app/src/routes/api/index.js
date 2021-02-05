import express from "express";
import { Auth, Users, Tweets } from "../../modules";

const router = express.Router();

router.use("/auth", Auth); // api/auth ->
router.use("/users", Users); // api/users ->
router.use("/tweets", Tweets); // api/tweets ->

const status = (req, res) => {
  res.status(200).json({ message: "Services running normally." });
};

router.get("/status", status);

export default router;
