import { Request, Response } from "express";
import * as fs from "fs";
import { Product } from "../data/product";

const DATA: Product[] = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

export const getHeadphones = (request: Request, response: Response) => {
    const headphones = DATA.filter(product => product.category === "headphones");
    response.json(headphones);
};

export const getEarphones = (request: Request, response: Response) => {
    const headphones = DATA.filter(product => product.category === "earphones");
    response.json(headphones);
};

export const getSpeakers = (request: Request, response: Response) => {
    const headphones = DATA.filter(product => product.category === "speakers");
    response.json(headphones);
};