import express from "express";
import User from "./models.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  try {
    const admin = await User.findOne({ username });
    console.log(admin);
    if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    }

    if (admin.password !== password) {
      res.status(401).send({ success: false, message: "Invalid password!" });
    }
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      success: true,
      message: "Authentication successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error);
    res
      .status(401)
      .send({ success: false, message: "Failed to login as admin" });
  }
});

export default router;
