import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CategoryTab from "./components/CategoryTab";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app--container">
        <div className="app--container--row">
          <CategoryTab />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
