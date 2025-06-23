import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

const port = process.env.APP_PORT || 4000;

// import routes
import bookRoutes from "./src/books/route.js";
import orderRoutes from "./src/orders/route.js";
import userRoutes from "./src/users/route.js";
import adminRoutes from "./src/stats/admin.js";

//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://get-book-9d88tpx0n-shailendrasingh189s-projects.vercel.app"],
    credentials: true,
  })
);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main()
  .then(() => console.log("Database Connected Successfully!"))
  .catch((err) => console.log(err));

// routes
app.use("/v1/api/books", bookRoutes);
app.use("/v1/api/orders", orderRoutes);
app.use("/v1/api/auth", userRoutes);
app.use("/v1/api/admin", adminRoutes);

app.use("/", (req, res) => {
  res.send("Get Book is running!");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
