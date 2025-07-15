import bgDotted from "../assets/black_dots.svg";

const BgDotted = () => {
  return (
    <div className='absolute inset-0 '>
      <img
        src={bgDotted}
        alt=''
        className='w-full h-full object-cover opacity-5 z-0'
      />
    </div>
  );
};

export default BgDotted;
