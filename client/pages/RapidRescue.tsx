import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/rapid-rescue/HeroSection";
import ServicesSection from "@/components/rapid-rescue/ServicesSection";
import WhyChooseUs from "@/components/rapid-rescue/WhyChooseUs";
import FAQSection from "@/components/rapid-rescue/FAQSection";
import ContactSection from "@/components/rapid-rescue/ContactSection";
import RescueOrderModal from "@/components/rapid-rescue/RescueOrderModal";

const RapidRescue = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string>("fuel");

    const handleOrderClick = (serviceType: string = "fuel") => {
        setSelectedService(serviceType);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col font-tajawal" dir="rtl">
            <Header />

            <main className="flex-1">
                <HeroSection onOrderClick={() => handleOrderClick("fuel")} />

                <ServicesSection onOrderClick={handleOrderClick} />

                <WhyChooseUs />

                <FAQSection />

                <ContactSection />
            </main>

            <Footer />

            <RescueOrderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultService={selectedService}
            />
        </div>
    );
};

export default RapidRescue;
