import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreakSentences from './components/sections/BreakSentences';
import Menu from './components/Menu';
import NotFound from "./components/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/break-sentences" element={<BreakSentences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
