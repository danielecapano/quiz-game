import game from "../assets/game.svg";

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center animate-scale'>
      <div className='flex flex-col items-center gap-4 mb-8'>
        <h1 className='text-6xl font-bangers text-center text-shadow-big text-shadow-shadow'>
          QUIZ!
        </h1>
        <img src={game} alt='' className='h-15' />
      </div>
    </div>
  );
};

export default Loader;
