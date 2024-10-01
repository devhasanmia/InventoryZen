import { TStock } from "./stock.interface";
import Stock from "./stock.model";

const addStock = async (payload: TStock) => {
    const stock = await Stock.create(payload);
    return stock;
}

const getStock = async (id: string) => {
    const stock = await Stock.findById(id).populate('product')
    return stock
}




export const StockService = {
    addStock,
    getStock
}