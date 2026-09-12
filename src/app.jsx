import Home from "./pages/Home/home";
import MenuBar from "./components/Menubar/menubar";
import Streams from "./pages/Streams/streams";
import { Routes, Route } from "react-router-dom";
import "./index.css"

function App() {
    return (
        <>
          <main>
            <MenuBar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/streams" element={<Streams />} />
            </Routes>
            </main>
        </>
    );
}

export default App;
