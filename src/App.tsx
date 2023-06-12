import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import GamePage from "./components/GamePage/GamePage";
import EndScreen from "./components/EndScreen/EndScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/play" element={<GamePage/>}/>
        <Route path="/game-end" element={<EndScreen/>}/>
      </Routes>
    </Router>
  )

}

export default App;
