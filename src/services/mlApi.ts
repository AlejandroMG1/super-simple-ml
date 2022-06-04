import axios from "axios"
import { MlProduct } from "../interfaces/mlProduct"

export const searchProduct = async (query: string): Promise<MlProduct[]> => {
    const options = {
        method: 'GET',
        url: `https://api.mercadolibre.com/sites/MCO/search?q=${query}`,
        headers: { 'content-type': 'application/json' }
    }

    const response = await axios(options)
    return response.data.results
}