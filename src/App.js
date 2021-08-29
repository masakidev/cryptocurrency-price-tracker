import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin'
import { FaSearch } from 'react-icons/fa'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    })
    .catch(error => console.log(error))
  },[])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className='bg-personalverydarkgreen py-4 font-sourcesanspro'>
      <div className='py-10 px-3'>
        <h1 className='text-xl font-bold text-personalwhite mb-1'>
          Search a currency
        </h1>
        <form>
          <input className='absolute w-52 h-10 pl-2 pr-10 rounded-md outline-none' type='text' placeholder='Search' onChange={handleChange} />
          <FaSearch className="top-3 left-44 relative text-gray-400" />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          volume={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.total_volume}
          />
        )
      })}
    </div>
  );
}

export default App;
