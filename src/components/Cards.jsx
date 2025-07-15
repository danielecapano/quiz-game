import { useQuestionsContext } from "../context/QuestionsContext";
import Card from "./Card";

// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

// gsap.registerPlugin(useGSAP);

const Cards = () => {
  const { questions, countQuestions, getNextQuestion, score, selectedAnswer } =
    useQuestionsContext();

  const question = questions[countQuestions];
  // const handleNextQuestion = () => {
  //   setCountQuestions((prev) => prev + 1);
  //   setSelectedAnswer(null);
  // };

  // const cardsRef = useRef([]);

  // useGSAP(() => {
  //   const cards = document.querySelectorAll(".flashcard");
  //   console.log("Trovate", cards.length, "flashcard");

  //   // gsap.set(".flashcard", {
  //   //   autoAlpha: 0,
  //   //   x: 100,
  //   // });
  //   gsap.from(
  //     ".flashcard",

  //     {
  //       autoAlpha: 0,
  //       x: 100,
  //       duration: 0.5,
  //       stagger: 0.2,
  //       ease: "power2.out",
  //     }
  //   );
  // }, [flashCards]);

  return (
    <>
      <div className='relative w-full min-h-screen z-10 flex flex-col gap-4'>
        {questions && (
          <>
            <div className='flex justify-between items-center'>
              <span>
                Domanda {countQuestions + 1}/{questions.length}
              </span>
              <span>Punteggio: {score}</span>
            </div>
            <div className='relative w-full h-1 bg-blue-100 rounded full overflow-hidden'>
              <div
                className='absolute h-full bg-blue-500'
                style={{
                  width: `${((countQuestions + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>

            <Card question={question} />
            <button
              className='bg-azure-700 hover:bg-azure-800 text-white font-bold py-2 px-4 rounded-full grow-1 mt-auto'
              onClick={getNextQuestion}
              disabled={
                countQuestions >= questions.length - 1 ||
                selectedAnswer === null
              }
            >
              Vai alla domanda successiva
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
