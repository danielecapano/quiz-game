import React from "react";
import { useQuestionsContext } from "../context/QuestionsContext";

const Finished = () => {
  const { getResetQuestions } = useQuestionsContext();
  return (
    <section className='flex flex-col items-center justify-center min-h-screen'>
      <h2 className='text-5xl font-medium font-bangers text-center mb-8'>
        Congratulazioni!
      </h2>
      {/* <p className='w-50'>{getFinalMessage(score)}</p> */}
      <p className='w-80 text-center font-bold text-xl mb-12'>
        Non importa quanti punti hai fatto,
        <br />
        tu sei l'amore mio e avrai sempre il punteggio massimo
      </p>
      <button className='btn' onClick={getResetQuestions}>
        ti amo
      </button>
    </section>
  );
};

export default Finished;
