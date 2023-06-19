import axios from "axios";
import LineChart from "../components/Coin/LineChart";

export const getCoinPrice = (id, days, priceType) => {
  const prices = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily `)
    .then((response) => {
      if (priceType === "market_caps") {
        return response.data.market_caps;
      } else if (priceType === "total_volumes") {
        return response.data.total_volumes;
      } else {
        return response.data.prices;
      }
    })
    .catch((err) => {
      console.log('Error : ', err);
    })
  if (prices) {
    return prices;
  } else {
    return;
  }
}