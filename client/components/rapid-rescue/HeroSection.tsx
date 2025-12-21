import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CarFront } from "lucide-react";

interface HeroSectionProps {
    onOrderClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
    return (
        <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#12171C]">
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Dark radial gradient to mimic the spotlight effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1d232a] via-[#12171C] to-[#12171C]" />

                {/* Subtle patterned background or noise usage if available, for now using a dark overlay over a generic tech/car bg to match the 'isometric' vibe if possible, otherwise keeping it clean dark */}
                <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg.png')] bg-cover bg-center mix-blend-overlay" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    {/* Tag/Badge */}
                    <div className="mt-[100px] inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="text-white text-sm font-medium">أنقذ يومك مع بترولايف</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.3] font-tajawal">
                        خدمة متوفرة على مدار الساعة،
                        <br />
                        <span className="text-white">لتبقى على الطريق بلا قلق.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        في موقف طارئ؟ سواء نفذ الوقود، أو تعطلت بطاريتك - فريق الإنقاذ السريع من بترولايف جاهز للوصول إليك خلال دقائق، أينما كنت.
                    </p>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <Button
                            onClick={onOrderClick}
                            className="h-14 px-8 text-lg font-bold bg-[#FF4D4D] hover:bg-[#FF3333] text-white rounded-full shadow-[0_4px_14px_0_rgba(255,77,77,0.39)] transition-all hover:scale-105 gap-3"
                        >
                            <CarFront className="w-6 h-6" />
                            أنقذني الآن
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default HeroSection;
