import axios from "axios"
import { MlProduct } from "../interfaces/mlProduct"

export const searchProduct = async (query: string, offset?:number,limit?:number): Promise<MlProduct[]> => {
    const options = {
        method: 'GET',
        url: `https://api.mercadolibre.com/sites/MCO/search?q=${query}${offset ? `&offset=${offset}` : ''}${limit ? `&limit=${limit}` : ''}`,
        headers: { 'content-type': 'application/json' }
    }

    const response = await axios(options)
    return response.data.results
}