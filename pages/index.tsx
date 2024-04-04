import type { NextPage } from "next";
import {useEffect, useState} from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { getStock } from '../services/index';
import {StockData} from "../utils/interfaces";

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  const stockMutation = useMutation({
    mutationFn: getStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stock'] })
    },
  })

  const [ticker, setSearchTerm] = useState<string>("");
  const [tickerData, setTickerData] = useState<any>();

  useEffect( () => {
    const fetchStock = async (ticker: string) => {
      const res = await getStock(ticker);
      setTickerData(res.data);
    };
    if (ticker !== "" && ticker.length > 3) {
      fetchStock(ticker).then(r => console.log('done'));
    }
  }, [ticker]);

  // TODO Implement Purchase Flow
  // TODO Implement Account Update

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full py-4 px-20 bg-gray-100 fixed top-0 left-0">
        <h1 className="text-2xl font-bold text-left">Carry</h1>
      </div>


      <main className="flex w-full flex-1 flex-col items-center justify-start pt-16 px-20">
        <div className="p-4 bg-white rounded-lg space-y-4 w-2/3 text-center">
          <p className="text-xl text-left">Stock Search</p>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="CRRY"
            className="w-full h-10 px-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          className="py-4 px-8  align-left bg-blue-800 radius rounded-md text-white text-center"
          onClick={async () => {
            const res = await getStock(ticker);
            setTickerData(res);
          }}
        >
          Search
        </button>

        <div className="p4 bg-white text-start mt-10">
          {tickerData && (
            <div>
              <p>
                {tickerData.name} -  {tickerData.ticker} - {tickerData.value}
              </p>
            </div>
          )}
        </div>
      </main>





    </div>
  );
};

export default Home;
