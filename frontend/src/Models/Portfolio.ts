export type portfolioGet = {
    id: number;
    symbol: string;
    companyName: string;
    purchase: number;
    lastDiv: number;
    industry: string;
    marketCap: number;
    comments: any
}
export type portfolioPost = {
    symbol: string;
};