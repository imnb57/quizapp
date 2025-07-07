import { BrowserRouter, Routes, Route } from "react-router-dom";
import JavaExam from "./pages/JavaExam";
import QuizApp from "./pages/QuizzApp";
import MyHome from "./pages/Home";


function App() {
  return (
      <Routes>
        <Route path="/" element={<MyHome/>}/>
        <Route path="/pythonQuiz" element={<QuizApp />} />
        <Route path="/javaQuiz" element={<JavaExam />} />
      </Routes>
  );
}

export default App;
