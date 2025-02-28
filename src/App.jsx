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

function App() {
    return (
        <div>
            <Header />
            <Navigation />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;