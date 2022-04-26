// const { api } = require("./AxiosService.js")
import { AppState } from "../AppState.js";
import { Apod } from "../models/apod.js";
import { api } from "./AxiosService.js";

const params = {
    api_key: 'KA05Hub9pbbjwhUe3QuOKLLdj5evwfQukvhUPYk4'
}
class ApodService {
    async getApod(){

    const res = await api.get('', {params})
    console.log(res.data)
    AppState.apod = new Apod(res.data)
    console.log(AppState.apod, 'Appstate log');
    }
}

export const apodService = new ApodService()