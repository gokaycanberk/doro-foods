import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

// Add CSS animations directly to document
document.head.appendChild(
  Object.assign(document.createElement("style"), {
    textContent: `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fade-in {
        animation: fadeIn 0.7s ease-out forwards;
      }
      
      .animate-fade-in-delayed {
        animation: fadeIn 0.7s ease-out 0.3s forwards;
        opacity: 0;
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes float-delayed {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes float-slow {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-delayed {
        animation: float-delayed 7s ease-in-out 1s infinite;
      }
      
      .animate-float-slow {
        animation: float-slow 8s ease-in-out 2s infinite;
      }
    `,
  })
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
