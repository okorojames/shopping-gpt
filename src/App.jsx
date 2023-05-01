import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CategoryTab from "./components/CategoryTab";
import Footer from "./components/Footer";
function App() {
  const tabBurgerStyles = {
    height: "3px",
    width: "35px",
    background: "#ced4da",
    marginTop: "8px",
    borderRadius: "10px",
  };
  const firstTabBurgerStyle = {
    height: "3px",
    width: "35px",
    background: "#ced4da",
    marginTop: "0",
    borderRadius: "10px",
  };
  return (
    <BrowserRouter>
      <Header />
      <div className="app--container" style={{ marginTop: "20px" }}>
        <div className="app--container--row" style={{ position: "relative" }}>
          <CategoryTab />
          <div
            className="toggle--category--tab"
            style={{ position: "absolute", top: "0", left: "0" }}
          >
            <div className="tab--burger" style={firstTabBurgerStyle}></div>
            <div className="tab--burger" style={tabBurgerStyles}></div>
            <div className="tab--burger" style={tabBurgerStyles}></div>
          </div>
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
