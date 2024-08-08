const axios = require("axios");

async function getStockPrice(ticker_symbol, api){
    const url = `https://api.twelvedata.com/price?symbol=${ticker_symbol}&apikey=${api}`
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        console.error(error);
        return "";
    }
}

async function getStockPricesList(ticker_symbol, api, interval = "1min", outputsize = 10) {
    const url = `https://api.twelvedata.com/time_series?symbol=${ticker_symbol}&interval=${interval}&outputsize=${outputsize}&apikey=${api}`;
    try {
        const response = await axios.get(url);
        const prices = response.data.values.map(entry => entry.close);
        return prices
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getStockQuote(ticker_symbol, api) {
    const url = `https://api.twelvedata.com/quote?symbol=${ticker_symbol}&apikey=${api}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return {};
    }
}

const ticker = "AAPL"
const api = "05cc728b22b14b0ab0c4d8536762f0f5"

getStockPrice(ticker, api).then(prices => {
    console.log(prices);
}).catch(error => {
    console.error("Error fetching stock prices:", error);
});