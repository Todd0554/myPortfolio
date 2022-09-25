import './style/App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Navbar from './components/Navbar'
import Upper from './components/Upper'
import SocialMedia from './components/SocialMedia'
import AboutMe from './routes/AboutMe'
import Resume from './routes/Resume'
import ResumePDF from './routes/ResumePDF'
import Contact from './routes/Contact'

function App() {
  return (
    <div>
      <Upper />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Resume/resumePDF" element={<ResumePDF />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <SocialMedia />
      <footer>
          <div>XinzheYu@copyright</div>
      </footer>
    </div>
  );
}

export default App;
