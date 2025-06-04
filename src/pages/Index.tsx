
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AdminPanel from '../components/AdminPanel';

const Index = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  if (isAdminMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <AdminPanel onBackToWebsite={() => setIsAdminMode(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Header onAdminClick={() => setIsAdminMode(true)} />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
