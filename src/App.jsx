import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToggleButton from './components/ToggleButton';
import ScrollProgressBar from './components/ScrollProgressBar';
import Resume from './components/Resume';
import BackToTop from './components/BackToTopButton';

function App() {
    return (
        <div>
            <ToggleButton />
            <ScrollProgressBar />
            <Header />
            <Navigation />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;