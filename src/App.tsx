import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ShowreelModal } from './components/ShowreelModal';
import { Lightbox } from './components/Lightbox';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { AboutSection } from './sections/AboutSection';
import { ClassesSection } from './sections/ClassesSection';
import { WorkshopsSection } from './sections/WorkshopsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { GallerySection } from './sections/GallerySection';
import { InstagramSection } from './sections/InstagramSection';
import { CredibilitySection } from './sections/CredibilitySection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FaqSection } from './sections/FaqSection';
import { ContactSection } from './sections/ContactSection';
import { FinalCtaSection } from './sections/FinalCtaSection';

import { GalleryItem } from './data/gallery';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | undefined>(undefined);
  
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const handleOpenBooking = (className?: string) => {
    setSelectedClass(className);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light flex flex-col font-sans selection:bg-brand-yellow selection:text-brand-dark">
      
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection 
          onOpenBooking={handleOpenBooking} 
          onOpenShowreel={() => setIsShowreelOpen(true)} 
        />
        
        <StatsSection />
        
        <AboutSection onOpenBooking={() => handleOpenBooking()} />
        
        <ClassesSection onSelectClass={(cls) => handleOpenBooking(cls)} />
        
        <WorkshopsSection onOpenBooking={(wsTitle) => handleOpenBooking(wsTitle)} />
        
        <AchievementsSection />
        
        <GallerySection onOpenLightbox={(item) => setSelectedGalleryItem(item)} />
        
        <InstagramSection />
        
        <CredibilitySection />
        
        <TestimonialsSection />
        
        <FaqSection />
        
        <ContactSection />
        
        <FinalCtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Actions & Modals */}
      <FloatingWhatsApp />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedClass={selectedClass}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      <Lightbox
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onPrev={() => {
          // cycle prev
        }}
        onNext={() => {
          // cycle next
        }}
      />

    </div>
  );
};

export default App;
