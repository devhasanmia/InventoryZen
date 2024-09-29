import { TStock } from "./stock.interface";
import Stock from "./stock.model";

const addStock = async (payload: TStock) => {
    const stock = await Stock.create(payload);
    return stock;
}


export const StockService = {
    addStock
}