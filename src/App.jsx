import { useState } from "react";
import BirthdayIntro from "./pages/Intro";
import Home from "./pages/Home";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
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