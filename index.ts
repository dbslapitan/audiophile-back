import * as express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json("reached");
});

app.listen(8080, () => {
    console.log("server started...");
});