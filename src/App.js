import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "components/Home/Home";
import { Quiz } from "components/quiz/Quiz";
import { Result } from "components/result/Result";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
