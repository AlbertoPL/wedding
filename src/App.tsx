import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import EventDetails from './pages/EventDetails';
import RSVP from './pages/RSVP';
import Travel from './pages/Travel';
import WeddingParty from './pages/WeddingParty';
import Registry from './pages/Registry';
import FAQs from './pages/FAQs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/wedding-party" element={<WeddingParty />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;