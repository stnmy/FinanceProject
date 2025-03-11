import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string): Promise<SearchResponse | string> => {
    try {
        let apiKey = process.env.REACT_APP_API_KEY?.trim(); // Directly using the API key
        if (apiKey?.endsWith(';')) {
            apiKey = apiKey.slice(0, -1);
        }
        console.log(apiKey)

        const response = await fetch(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return {data : data as CompanySearch[]};
    } catch (error) {
        if (error instanceof Error) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occurred.";
        }
    }
};

// export const getCompanyProfile = async (query: string) => {
    
//     try{
//         let apiKey = process.env.REACT_APP_API_KEY?.trim(); // Directly using the API key
//         if (apiKey?.endsWith(';')) {
//             apiKey = apiKey.slice(0, -1);
//         }
//         // const response = await fetch(
//         //     `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
//         // );
//         const data = await axios.get<CompanyProfile[]>(
//             `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`
//         )
//         console.log(data)
//         return data;
//     }catch(error: any){
//         console.log("error message from api:", error.message);
//     }
// }


export const getCompanyProfile = async (query: string): Promise<CompanyProfile[] | string> => {
    try {
        let apiKey = process.env.REACT_APP_API_KEY?.trim(); // Directly using the API key
        if (apiKey?.endsWith(';')) {
            apiKey = apiKey.slice(0, -1);
        }

        const response = await fetch(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: CompanyProfile[] = await response.json();
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from api:", error.message);
        return error.message;
    }
};

export const getKeyMetrics = async (query: string) => {
    try {
        let apiKey = process.env.REACT_APP_API_KEY?.trim();
        if (apiKey?.endsWith(';')) {
            apiKey = apiKey.slice(0, -1);
        }

        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${apiKey}`
        );
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from api:", error.message);
        return error.message;
    }
};


export const getIncomeStatement = async (query: string) => {
    try {
        let apiKey = process.env.REACT_APP_API_KEY?.trim();
        if (apiKey?.endsWith(';')) {
            apiKey = apiKey.slice(0, -1);
        }

        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?period=annual&apikey=${apiKey}`
        );
        console.log("The data is")
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from api:", error.message);
        return error.message;
    }
};

export const getBalanceSheet= async (query: string) => {
    try {
        let apiKey = process.env.REACT_APP_API_KEY?.trim();
        if (apiKey?.endsWith(';')) {
            apiKey = apiKey.slice(0, -1);
        }

        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?period=annual&apikey=${apiKey}`
        );
        console.log("The data is")
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from api:", error.message);
        return error.message;
    }
};

export const getCashFlowStatement= async (query: string) => {
    try {
        let apiKey = process.env.REACT_APP_API_KEY?.trim();
        if (apiKey?.endsWith(';')) {
            apiKey = apiKey.slice(0, -1);
        }

        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?period=annual&apikey=${apiKey}`
        );
        console.log("The data is")
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error message from api:", error.message);
        return error.message;
    }
};