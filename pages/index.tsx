import type { NextPage } from "next";
import {useEffect, useState} from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const Home: NextPage = () => {

  // TODO Implement Search Results functionality
  const [ticker, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    if (ticker !== "") {

      // trigger automatic fetch to API
    }
  }, [ticker])

  // TODO Implement Purchase Flow
  // TODO Implement Account Update

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full py-4 px-20 bg-gray-100 fixed top-0 left-0">
        <h1 className="text-2xl font-bold text-left">Carry</h1>
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-start pt-16 px-20 text-center">
        <div className="p-4 bg-white rounded-lg space-y-4 w-2/3">
          <p className="text-xl text-left">Stock Search</p>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="CRRY"
            className="w-full h-10 px-2 border border-gray-300 rounded-lg"
          />
        </div>
      </main>

      {searchResults.length > 0 && (
        <div className="flex w-full flex-1 flex-col items-center justify-center py-4 px-8 text-left">
          <h3>Stocks</h3>
          <ul role="list" className="divide-y divide-gray-100">
            {searchResults.map((result) => (
              <li key={result} className="py-4">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/*<main className="flex w-full flex-1 flex-col items-center justify-start pt-16 px-20 text-center">*/}
      {/*  <div className="p-4 bg-white rounded-lg space-y-4 w-2/3">*/}
      {/*    <p className="text-xl text-left">Stock Search</p>*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      placeholder="CRRY"*/}
      {/*      className="w-full h-10 px-2 border border-gray-300 rounded-lg"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</main>*/}
    </div>
  );
};

export default Home;
