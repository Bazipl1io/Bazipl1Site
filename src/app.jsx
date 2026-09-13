import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css"

import Home from "./pages/Home/home";
import MenuBar from "./components/Menubar/menubar";
import Streams from "./pages/Streams/streams";
import Contacts from "./pages/Contacts/contacts";

import WatchDogs from "./components/Meme/WatchDogs/watchdogs";


function App() {
  const [showDedsec, setShowDedsec] = useState(false);

    useEffect(() => {
      // Подсказка при открытии консоли F12
      console.log(
        "%c[SYSTEM ONLINE] %cType WatchDogs() in console to trigger protocol...",
        "color: #00ff00; font-weight: bold;",
        "color: #ffffff;"
      );

      // Регистрируем глобальную функцию WatchDogs()
      window.WatchDogs = () => {
        console.log(
          "%c[DEDSEC] PROTOCOL ACTIVATED. SYSTEM OVERRIDDEN.",
          "color: #ff0055; font-size: 14px; font-weight: bold;"
        );
        setShowDedsec(true);
        return "JOIN US. WE ARE DEDSEC.";
      };

      return () => {
        delete window.WatchDogs;
      };
    }, []);

    return (
        <>
          <main>
            <MenuBar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/contacts" element={<Contacts />} />
            </Routes>
            {showDedsec && <WatchDogs onClose={() => setShowDedsec(false)} />}
            </main>
        </>
    );
}

export default App;
