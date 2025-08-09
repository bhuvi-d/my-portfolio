import Terminal from '../components/Terminal';
import Hero from '../components/Hero';
import CustomCursor from "../components/CustomerCursor";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
function App() {
  return (
    <div className="min-h-screen bg-[#1e1e2f] text-[#fef9ff] flex flex-col items-center justify-center p-4">
      <CustomCursor />
      <Hero />
      <Projects />
      <Certifications />
     
    </div>
  );
}

export default App;
