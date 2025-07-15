import React from "react";
import { useQuestionsContext } from "../context/QuestionsContext";

const Finished = () => {
  const { score, getFinalMessage } = useQuestionsContext();
  return (
    <section className='flex flex-col items-center justify-center min-h-screen'>
      <h2 className='text-3xl font-medium text-center mb-8'>
        Hai totalizzato{" "}
        <span className='text-azure-700 font-bold'>{score}</span> punti
      </h2>
      <p className='w-50'>{getFinalMessage(score)}</p>
    </section>
  );
};

export default Finished;
