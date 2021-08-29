import './Coin.css';

const Coin = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
  return (
    <div className='my-5 mx-3'>
      <div className='bg-personaldarkgreen flex justify-between p-4 rounded-md'>
        <div className='flex items-center gap-3'>
          <img className='h-12 p-2 bg-personalgreen rounded-md' src={image} alt={name} />
          <div>
          <h1 className='text-personalwhite font-bold'>{name}</h1>
          <p className='uppercase text-personalwhite'>{symbol}</p>
          </div>
        </div>
        <div className='flex gap-6'>
          <p className='text-personalwhite'>${price}</p>
          <p className='hidden'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='text-red-400'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='text-green-400'>{priceChange.toFixed(2)}%</p>
          )}
          <p className='hidden'>
            {marketcap}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;