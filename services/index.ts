import {StockData} from "../utils/interfaces";

export const getStock = async (ticker: string) => {
	const res = await fetch(
		'api/stock/' + ticker,
		{
			method: 'GET',
			headers: {},
			cache: 'no-store'
		}
	);
	const stock = await res.json();
	return stock;
}
