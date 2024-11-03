import { Request, Response } from "express";
import * as fs from "fs";
import { Product } from "../data/product";

const DATA: Product[] = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

export const getHeadphones = (request: Request, response: Response) => {
    const headphones = DATA.filter(product => product.category === "headphones").map(product => {
        const {id, slug, name, categoryImage, description, new: isNew} = (product as Product);
        return {id, slug, name, categoryImage, description, isNew};
    });
    response.json(headphones);
};

export const getEarphones = (request: Request, response: Response) => {
    const headphones = DATA.filter(product => product.category === "earphones").map(product => {
        const {id, slug, name, categoryImage, description, new: isNew} = (product as Product);
        return {id, slug, name, categoryImage, description, isNew};
    });;
    response.json(headphones);
};

export const getSpeakers = (request: Request, response: Response) => {
    const headphones = DATA.filter(product => product.category === "speakers").map(product => {
        const {id, slug, name, categoryImage, description, new: isNew} = (product as Product);
        return {id, slug, name, categoryImage, description, isNew};
    });;
    response.json(headphones);
};