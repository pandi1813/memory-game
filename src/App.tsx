import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import GamePage from "./components/GamePage/GamePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/play" element={<GamePage/>}/>

      </Routes>
    </Router>
  )

}

export default App;
