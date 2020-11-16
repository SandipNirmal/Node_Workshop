import express from "express";

const router = express.Router();

const status = (req, res) => {
  res.status(200).json({ message: "Services running normally." });
};

router.get("/status", status);
router.get("/", status);

export default router;
