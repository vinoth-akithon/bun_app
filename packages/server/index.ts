import express from "express";
import dotenv from "dotenv"

import type {Request, Response} from "express"

// loading environment variables
dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    return res.send("Hello World!");
})
app.get("/api/hello", (req: Request, res: Response) => {
    return res.json({
        message: "Hello World!"
    });
})


app.listen(5000, (e) => {
    console.log(`Server is running at http://127.0.0.1:${port}`)
})
