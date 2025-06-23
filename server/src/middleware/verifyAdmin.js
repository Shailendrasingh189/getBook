import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyAdmin = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access Denied. No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid credientials" });
    }
    req.user = user;
    next();
  });
};

export default verifyAdmin;
