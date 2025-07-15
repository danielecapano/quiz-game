/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// 1. Crea il contesto
export const QuestionsContext = createContext(null);

// 2. Crea il custom hook per usare il contesto
export const useQuestionsContext = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error(
      "useQuestionsContext must be used within a QuestionsContextProvider"
    );
  }
  return context;
};

// 3. Crea il provider
const QuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState(null);
  const [status, setStatus] = useState("start");
  const [topic, setTopic] = useState("");
  const [score, setScore] = useState(0);
  const [countQuestions, setCountQuestions] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    if (selectedAnswer !== null) {
      if (countQuestions === questions.length - 1) {
        setTimeout(() => {
          setStatus("finished");
        }, 4000);
      }
    }
  }, [selectedAnswer, countQuestions, questions]);

  const getNextQuestion = () => {
    if (countQuestions < questions.length - 1) {
      setCountQuestions((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsClickable(true);
    }
  };

  const getFinalMessage = (score) => {
    switch (true) {
      case score === 10:
        return "🎓 Genio assoluto! Hai preso 10 su 10. Hai letto Wikipedia ieri, vero?";
      case score >= 8:
        return "🔥 Quasi perfetto! Il tuo cervello merita un applauso (e forse una vacanza)!";
      case score >= 6:
        return "👍 Bravo! Sei sulla buona strada per diventare un campione di trivia. Un altro giro?";
      case score >= 4:
        return "🤔 Hmm... c’è del potenziale! Dai, un ripassino e la prossima volta spacchi!";
      case score >= 2:
        return "🧠 Non mollare! Hai dato il massimo (forse). Riprova, andrà meglio!";
      case score >= 0:
        return "🫣 Ehm... almeno ci hai provato! L’importante è partecipare… giusto?";
      default:
        return "😵 Punteggio non valido. Hai imbrogliato? 😅";
    }
  };

  // const ListOfQuestions = (array) => {
  //   if (!Array.isArray(array) || array.length === 0) {
  //     return "Nessuna domanda precedente.";
  //   }
  //   const questions = array.map((item) => item.question);
  //   return questions.map((q) => `- ${q}`).join("\n");
  // };

  const getResetQuestions = () => {
    setQuestions(null);
    setStatus("start");
    setTopic("");
    setScore(0);
    setCountQuestions(0);
    setSelectedAnswer(null);
    setIsClickable(true);
  };

  const getCardsFromGemini = async () => {
    setStatus("loading");

    const prompt = `
    Genera 10 domande a risposta multipla sull'argomento: ${topic}.

Ogni domanda deve avere:
- un campo "id" numerico univoco (da 1 a 10),
- un campo "question" con il testo della domanda (max 100 caratteri),
- un array "options" con 4 possibili risposte (max 30 caratteri ciascuna),
- un campo "correctAnswer" con il formato Number (0-3) che indica l'indice della risposta corretta nell'array "options",
- un campo "explanation" con una breve spiegazione della risposta corretta.

Restituisci solo un array JSON valido nel formato specificato, **senza usare formattazione Markdown o blocchi di codice** :

[
  {
    "id": 1,
    "question": "Testo della domanda",
    "options": ["Risposta A", "Risposta B", "Risposta C", "Risposta D"],
    "correctAnswer": Number, // 0, 1, 2 o 3
    "explanation": "Spiegazione della risposta corretta"
  },
  ...
]`;

    const body = { prompt: prompt };
    setQuestions(null);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const result = await axios.post(
        "https://gemini-blond-two.vercel.app/api/generate-text",
        body,
        config
      );
      const data = JSON.parse(result.data.generatedText);
      console.log("Data:", data);
      setQuestions(data);
      setStatus("results");
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
      setStatus("error");
    } finally {
      // setStatus("results");
    }
  };

  const value = {
    questions,
    setQuestions,
    status,
    setStatus,
    topic,
    setTopic,
    getCardsFromGemini,
    getNextQuestion,
    getResetQuestions,
    countQuestions,
    setCountQuestions,
    selectedAnswer,
    setSelectedAnswer,
    score,
    setScore,
    getFinalMessage,
    isClickable,
    setIsClickable,
  };

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
