import type { Coin } from "../types/index";

interface CryptoListProps {
  coins: Coin[];
}

const CryptoList = ({ coins }: CryptoListProps) => {
  const formatPrice = (price: string) => {
    const priceNum = parseFloat(price);
    if (priceNum < 0.01) {
      return `$${priceNum.toPrecision(2)}`;
    }
    return `$${priceNum.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="hidden md:grid grid-cols-3 items-center px-6 py-4 bg-gray-700/50 font-bold text-gray-400 uppercase tracking-wider text-sm">
        <span>Rank</span>
        <span>Name</span>
        <span className="text-right">Price</span>
      </div>

      <div>
        {coins.length > 0 ? (
          coins.map((coin) => (
            <div
              key={coin.uuid}
              className="grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center px-6 py-5 border-b border-gray-700 last:border-b-0 gap-4"
            >
              <span className="text-gray-400 text-lg font-bold">
                {coin.rank}
              </span>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-semibold text-lg">{coin.name}</span>
                <span className="text-gray-500 text-sm md:ml-2">
                  ({coin.symbol})
                </span>
              </div>
              <span className="text-lg font-semibold text-right">
                {formatPrice(coin.price)}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center py-10 text-gray-400">No coins found.</p>
        )}
      </div>
    </div>
  );
};

export default CryptoList;
