const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
// const PORT = process.env.PORT || 5000;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`db connected`))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(`server on http://localhost:5000`)
);
