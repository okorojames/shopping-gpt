import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app--container">
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
