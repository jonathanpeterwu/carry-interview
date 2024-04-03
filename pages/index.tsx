import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full py-4 px-20 bg-gray-100 fixed top-0 left-0">
        <h1 className="text-2xl font-bold text-left">Carry</h1>
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-start pt-16 px-20 text-center">
        <div className="p-4 bg-white rounded-lg space-y-4 w-2/3">
          <p className="text-xl text-left">Stock Search</p>
          <input
            type="text"
            placeholder="CRRY"
            className="w-full h-10 px-2 border border-gray-300 rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
