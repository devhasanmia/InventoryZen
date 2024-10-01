import { TSales } from "./stock.interface";
import Sales from './stock.model';

const newSales = async (payload: TSales) => {
    const sales = await Sales.create(payload)
    return sales;
}


export const SalesService = {
    newSales
}