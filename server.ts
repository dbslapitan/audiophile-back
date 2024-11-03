import * as dotenv from "dotenv";

const result = dotenv.config();
const PORT = parseInt(process.env.PORT as string) || 8081;

if(result.error){
    console.log(result.error.message);
}

import * as express from "express";
import { getHeadphones } from "./controllers/product";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json({
        message: "Reached the backend of Dirk Brandon Lapitan's audiophile web app...",
        data: ""
    });
});

app.get("/headphones", getHeadphones);

app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}...`);
});