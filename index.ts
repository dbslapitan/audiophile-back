import * as express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "REached"
    });
});

app.listen(8080, () => {
    console.log("server started...");
});