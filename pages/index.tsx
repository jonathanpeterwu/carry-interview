import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full py-4 px-20 bg-gray-100 fixed top-0 left-0">
        <h1 className="text-2xl font-bold text-left">
          Carry
        </h1>
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-start pt-16 px-20 text-center">
        <p className="text-xl">
          Stock Search
        </p>
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">Email</label>
          <input className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="you@site.com" />
        </div>
      </main>
    </div>
  )
}

export default Home
