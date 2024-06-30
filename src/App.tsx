import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { More } from "./pages/more/More";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/more" element={<More />}></Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
