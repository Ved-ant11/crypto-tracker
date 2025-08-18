import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchCoins } from "./features/crypto/cryptoSlice";
import CryptoList from "./components/CryptoList";
import { CiSearch } from "react-icons/ci";

type SortKey = "rank" | "name" | "price";
type SortDirection = "asc" | "desc";

function App() {
  const dispatch = useAppDispatch();
  const { coins, status, error } = useAppSelector((state) => state.crypto);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: "rank",
    direction: "asc",
  });

  useEffect(() => {
    dispatch(fetchCoins());
    const interval = setInterval(() => {
      dispatch(fetchCoins());
    }, 60000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const processedCoins = useMemo(() => {
    let processableCoins = [...coins];
    if (searchTerm) {
      processableCoins = processableCoins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    processableCoins.sort((a, b) => {
      let aValue: string | number = a[sortConfig.key];
      let bValue: string | number = b[sortConfig.key];
      if (sortConfig.key === "price" || sortConfig.key === "rank") {
        aValue = parseFloat(aValue as string);
        bValue = parseFloat(bValue as string);
      }
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return processableCoins;
  }, [coins, searchTerm, sortConfig]);

  const handleSort = (key: SortKey) => {
    let direction: SortDirection = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  let content;
  if (status === "loading" && coins.length === 0) {
    content = (
      <div className="text-center py-16 text-xl text-gray-400">
        <h2>Loading... ⏳</h2>
      </div>
    );
  } else if (
    status === "succeeded" ||
    (status === "loading" && coins.length > 0)
  ) {
    content = <CryptoList coins={processedCoins} />;
  } else if (status === "failed") {
    content = (
      <div className="text-center py-16 text-xl text-red-400">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Crypto Price <span className="text-cyan-600">Tracker</span>
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Prices update automatically every minute.
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto px-4 mb-8 gap-4">
        <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 w-full md:w-1/3">
          <CiSearch className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by name or symbol..."
            className="ml-2 bg-transparent focus:outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Sort by:</span>
          <button
            onClick={() => handleSort("rank")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              sortConfig.key === "rank"
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Rank
          </button>
          <button
            onClick={() => handleSort("name")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              sortConfig.key === "name"
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Name
          </button>
          <button
            onClick={() => handleSort("price")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              sortConfig.key === "price"
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Price
          </button>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 pb-8">{content}</main>
    </div>
  );
}

export default App;
