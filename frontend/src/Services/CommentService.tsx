// import { handleError } from "../Helpers/ErrorHandler";
// import { CommentPost } from "../Models/Comment"

// const api = "https://localhost:7012/api/comment/"

// export const commentPostApi = async(title: string, content: string, symbol: string) =>{
//     try {
//         const data = await axios.post<CommentPost>(api + `${symbol}`, {
//             title: title,
//             content: content,
//         })
//         console.log("The api is working")
//         return data;
//     } catch (error) {
//         handleError(error);
//     }
// }

import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { CommentPost } from "../Models/Comment";

const api = "https://localhost:7012/api/comment/";

export const commentPostApi = async (title: string, content: string, symbol: string) => {
    try {
        console.log("API Call Started:", title, content, symbol); // Debugging

        const response = await axios.post<CommentPost>(`${api}${symbol}`, {
            title: title,
            content: content,
        });

        console.log("Raw API Response:", response); // Debugging

        if (!response || !response.data) {
            console.warn("API response is empty or invalid");
            return null;
        }

        console.log("The API is working");
        return response.data;
    } catch (error) {
        console.error("API Call Failed:", error);
        handleError(error);
        return null; // Ensure function always returns something
    }
};
