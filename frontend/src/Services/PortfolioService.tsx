import axios from "axios";
import { portfolioGet, portfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const api = "https://localhost:7012/api/portfolio";

export const portfolioAddApi = async (symbol: string) => {
    try {
        const data = await axios.post<portfolioPost>(api + `?symbol=${symbol.toLowerCase()}`);
        return data;
    } catch (error) {
        handleError(error);
    }
};


export const portfolioDeleteApi = async (symbol: string) => {
    try {
        const data = await axios.delete<portfolioPost>(api + `?symbol=${symbol.toLowerCase()}`);
        return data;
    } catch (error) {
        handleError(error);
    }
};


export const portfolioGetApi = async () => {
    try {
        const data = await axios.get<portfolioGet[]>(api);
        return data;
    } catch (error) {
        handleError(error);
    }
};