import Terminal from '../components/Terminal';
import Hero from '../components/Hero';
import CustomCursor from "../components/CustomerCursor";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import About from '../components/About';
import SkillClusters from '../components/Skills';
import ExperienceTimeline from '../components/Timeline';
import DevToArticles from '../components/Articles';
import CodeBreaker from '../components/Game';

function App() {
  return (
    <div className="min-h-screen bg-[#1e1e2f] text-[#fef9ff] flex flex-col items-center justify-center p-4">
      <CustomCursor />
      <Hero />
      <About />
      <Projects />
      <CodeBreaker />
      <SkillClusters />
      <ExperienceTimeline />
      <DevToArticles />
      <Certifications />
     
    </div>
  );
}

export default App;
