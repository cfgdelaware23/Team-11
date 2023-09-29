import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// mongoose.connect(DB_URI).then(() => {
//     console.log(`Connected to ${process.env.DB_NAME}`);
// }).catch(console.log);

const app = express();
app.use(cors());
app.use(json({
    verify: (req, buf) => {
        req.rawBody = buf.toString();
    },
}));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Ready to go");
    });
});