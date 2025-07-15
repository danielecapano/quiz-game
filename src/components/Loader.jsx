import sparkleStarBig from "../assets/sparkle-star-big.svg";

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <img src={sparkleStarBig} alt='' className='size-50 animate-pulse' />
    </div>
  );
};

export default Loader;
