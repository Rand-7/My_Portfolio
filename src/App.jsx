import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استيراد المكونات
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import CallToAction from './Components/CallToAction/CallToAction';
import Projects from './Components/Projects/Projects';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails'; // المكون الجديد الذي أنشأناه
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

// مكون الصفحة الرئيسية (يجمع كل الأقسام)
const Home = () => (
  <>
    <Hero />
    <About />
    <Education />
    <CallToAction />
    <Projects />
    <Contact/>
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white via-white to-sky-50">
        <Navbar />
        
        <main>
          <Routes>
            {/* المسار الرئيسي يعرض كل الأقسام */}
            <Route path="/" element={<Home />} />
            
            {/* مسار صفحة تفاصيل المشروع الجديدة */}
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;