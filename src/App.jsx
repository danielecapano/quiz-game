import { useEffect } from "react";
import Cards from "./components/Cards";
import Home from "./components/Home";
import Loader from "./components/Loader";
import { useQuestionsContext } from "./context/QuestionsContext";
import BgDotted from "./components/BgDotted";
import Finished from "./components/Finished";

const App = () => {
  const { status } = useQuestionsContext();

  useEffect(() => {
    if (status === "results") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [status]);
  return (
    <main className='relative flex flex-col items-center min-h-screen bg-gradient-with-svg text-white p-5'>
      {/* <BgDotted /> */}
      {status === "start" && <Home />}
      {status === "loading" && <Loader />}
      {status === "results" && <Cards />}
      {status === "finished" && <Finished />}
    </main>
  );
};

export default App;
