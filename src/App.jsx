import { useState } from "react";
import BirthdayIntro from "./pages/Intro";
import Home from "./pages/Home";
import BackgroundMusic from "./components/BackgroundMusic";


function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <BackgroundMusic />
      {!introFinished ? (
        <BirthdayIntro
          onComplete={() => setIntroFinished(true)}
        />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;