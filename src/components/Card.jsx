// import gsap from "gsap";

import { useQuestionsContext } from "../context/QuestionsContext";

const Card = ({ question }) => {
  const {
    selectedAnswer,
    setSelectedAnswer,
    setScore,
    isClickable,
    setIsClickable,
  } = useQuestionsContext();

  const handleAnswerClick = (index) => {
    if (!isClickable) return;

    setSelectedAnswer(index);
    setIsClickable(false);
    if (index === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const letters = ["A", "B", "C", "D"];

  return (
    <>
      <div className='w-full h-40 bg-gradient-box font-bold text-lg p-4 flex items-center justify-center rounded-6xl shadow-lg'>
        {question.question}
      </div>
      <div className='space-y-2 mt-4'>
        {question.options.map((answer, index) => {
          const hasAnswered = selectedAnswer !== null;
          const isSelected = selectedAnswer === index;
          const isCorrect = question.correctAnswer === index;

          const getOptionClasses = () => {
            const classNames = [
              "p-2",
              "rounded-lg",
              "shadow-md",
              "cursor-pointer",
            ];

            if (!hasAnswered) {
              classNames.push("bg-azure");
              return classNames.join(" ");
            }

            if (isCorrect) {
              classNames.push(isSelected ? "bg-green-600" : "bg-green-500");
            } else {
              classNames.push(
                isSelected ? "bg-red-500" : "bg-azure opacity-50"
              );
            }

            // if (isSelected) {
            //   classNames.push("border-2", "border-yellow");
            // }

            return classNames.join(" ");
          };

          return (
            <div
              key={index}
              className={getOptionClasses()}
              onClick={() => handleAnswerClick(index)}
            >
              <div className='flex items-center gap-4'>
                <span>{letters[index]}</span>
                <span>{answer}</span>
              </div>
            </div>
          );
        })}
        {selectedAnswer !== null && (
          <div className='mt-6'>
            <p className='text-lg font-semibold text-center mb-2'>
              {selectedAnswer === question.correctAnswer
                ? "Risposta corretta!"
                : "Risposta sbagliata!"}
            </p>
            <div className='bg-azure-50 border-2 border-azure-700 text-azure-700 p-2 rounded-lg'>
              <p>{question.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
