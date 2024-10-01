import { RequestHandler } from "express";
import { SalesService } from "./stock.service";

const newSales : RequestHandler = async (req, res, next) => {
    try {
        const sales = await SalesService.newSales(req.body);
        res.status(201).json({
            success: true,
            message: "অভিনন্দন নতুন প্রোডাক্ট বিক্রি হয়েছে",
            data: sales,
        })
    } catch (error) {
        next(error);
    }
}

export const SalesController = {
    newSales,
}