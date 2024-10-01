import { RequestHandler } from "express";
import { StockService } from "./stock.service";


const addStack: RequestHandler = async (req, res, next) => {
    try {
        const stock = await StockService.addStock(req.body);
        res.json({
            success: true,
            message: "নতুন স্টক যোগ করা হয়েছে",
            data: stock,
        });
    } catch (error) {
        next(error);
    }
}

const getStock: RequestHandler = async (req, res, next) => {
    try {
        const stock = await StockService.getStock(req.params.id);
        res.status(200).json({
            success: true,
            message: "লোড সফল হয়েছে",
            data: stock,
        })
    } catch (error) {
        next(error)
    }
}

export const StockController = {
    addStack,
    getStock
}