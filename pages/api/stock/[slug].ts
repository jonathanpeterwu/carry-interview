import type { NextApiRequest, NextApiResponse } from 'next'
import { StockData } from '../../../utils/interfaces'
import yahooFinance from 'yahoo-finance2';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{ data: StockData | undefined }>
) {
	if (req.method === 'GET') {
		const { slug } = req.query
		console.log(slug)
		if (slug !== '' && slug) {
			const quote = await yahooFinance.quote(slug.toString());
			console.log(quote);
			// TODO if currency conversion is passed to endpoint
			const { regularMarketPrice , currency, symbol,  displayName} = quote;
			res.status(200).json({ data: {
				name: displayName?.toString() || slug.toString(),
				ticker: symbol,
				value: regularMarketPrice || 0
			}})
		}
		res.status(400);
	}
}
