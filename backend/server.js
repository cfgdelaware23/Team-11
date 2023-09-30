import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes.js";
import cashierRouter from "./routes/cashier-routes.js";
import adminRouter from "./routes/admin-routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(json({
    verify: (req, buf) => {
        req.rawBody = buf.toString();
    },
}));

app.use("/user", userRouter);
app.use("/cashier", cashierRouter);
app.use("/admin", adminRouter);

/* mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Ready to go");
    });
}); */

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.useDb("CFG2023")
connection.once('open', () => {
    console.log("Connected to MongoDB");
})

app.listen(process.env.PORT, () => {
    console.log("Server opened");
})