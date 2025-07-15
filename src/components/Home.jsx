import React from "react";
import { useQuestionsContext } from "../context/QuestionsContext";
import sparkleStar from "../assets/sparkle-star.svg";
import game from "../assets/game.svg";
import play from "../assets/play.svg";

const Home = () => {
  const { getCardsFromGemini, topic, setTopic } = useQuestionsContext();

  return (
    <section className='relative z-10 flex flex-col items-center gap-4 px-4'>
      <div>
        <div className='flex flex-col items-center gap-4 mb-8'>
          <h1 className='text-6xl font-bangers text-center text-shadow-big text-shadow-shadow'>
            QUIZ!
          </h1>
          <img src={game} alt='' className='h-15' />
        </div>
        <div className='flex flex-col items-center gap-4 mb-8 bg-gradient-box text-white p-8 rounded-6xl shadow-2xl'>
          <h3 className='text-xl font-medium'>
            Benvenuto su{" "}
            <span className='text-primary-1 font-bold'>Quiz! GAME</span>
          </h3>
          <p>
            Mettiti alla prova con domande curiose, buffe e imprevedibili.
            <br />
            Ridi, impara e scopri quanto ne sai davvero... o quanto pensavi di
            saperne!
          </p>
          <p>Scegli un argomento per iniziare oppure affidati alla sorte</p>
          <input
            type='text'
            className='input-box'
            placeholder='Scrivi qui...'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <button className='btn btn-rounded' onClick={getCardsFromGemini}>
        <div className='flex items-center gap-2'>
          {/* Icona di una stella scintillante */}
          {/* Assicurati di avere l'icona corretta nel percorso specificato */}
          {/* <img src={sparkleStar} alt='' className='size-5' /> */}
          {/* <span className=''>Genera domande</span> */}
          <img src={play} alt='' className='size-10' />
        </div>
      </button>
    </section>
  );
};

export default Home;
