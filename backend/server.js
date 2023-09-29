import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
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

app.listen(process.env.PORT, () => {
    console.log("Ready to go");
});