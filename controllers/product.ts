import { Request, Response } from "express";
import * as fs from "fs";

const DATA = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

export const getHeadphones = (request: Request, response: Response) => {
    response.json(DATA);
};