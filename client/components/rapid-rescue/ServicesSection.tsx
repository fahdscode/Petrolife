import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Fuel, Battery, Disc, Truck, Key } from "lucide-react";

interface ServicesSectionProps {
    onOrderClick: (serviceType: string) => void;
}

const services = [
    {
        id: "fuel",
        title: "تزويد الوقود",
        icon: Fuel,
        description: "نفد الوقود في الطريق؟ لا تقلق، سنصل إليك أينما كنت لتعبئة سيارتك فورًا وإعادتك إلى الطريق.",
        features: [
            "وقت الوصول: خلال 20 دقيقة",
            "رسوم الخدمة: 100 ريال",
            "الوقود المتاح: سوبر 98 / سبشيال 95 / ديزل",
            "السعر النهائي يعتمد على كمية الوقود المطلوبة.",
        ],
        image: "/fill-fuel.png"
    },
    {
        id: "battery",
        title: "إعادة تشغيل البطارية",
        icon: Battery,
        description: "توقفت سيارتك بسبب البطارية؟ سنقوم بإعادة تشغيلها فورًا لتكمل طريقك بأمان.",
        features: [
            "وقت الوصول: خلال 30 دقيقة",
            "رسوم الخدمة: 150 ريال",
            "تُستحق رسوم الخدمة حتى في حال لم تعمل البطارية بعد المحاولة.",
        ],
        image: "/battery.png"
    },
    {
        id: "tires",
        title: "تبديل الإطارات",
        icon: Disc,
        description: "إطار مثقوب أو تالف؟ نبدّله بالإطار الاحتياطي الخاص بك لتعود على الطريق بسرعة.",
        features: [
            "وقت الوصول: خلال 30 دقيقة",
            "رسوم الخدمة: 150 ريال",
            "يجب توفر إطار احتياطي صالح في مركبتك.",
        ],
        image: "/tires.png"
    },
    {
        id: "pressure",
        title: "ملء ضغط الإطارات",
        icon: Truck,
        description: "نضبط ضغط الإطارات لمستوى آمن ومثالي يمنحك قيادة مريحة وثابتة.",
        features: [
            "وقت الوصول: خلال 30 دقيقة",
            "رسوم الخدمة: 100 ريال",
        ],
        image: "/pressure.png"
    },
    {
        id: "towing",
        title: "سحب المركبات (قطر السيارة)",
        icon: Key,
        description: "تعطلت سيارتك فجأة؟ سنقوم بسحبها بأمان إلى أقرب ورشة أو موقع تختاره.",
        features: [
            " وقت الوصول: من 45 إلى 60 دقيقة",
            " رسوم الخدمة: 185 ريال",
            "يجب تواجدك عند تسليم واستلام المركبة. لا تشمل الخدمة أي إصلاحات ميكانيكية.",
        ],
        image: "/towing.png"
    },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOrderClick }) => {
    const [activeService, setActiveService] = useState("fuel");

    const currentService = services.find(s => s.id === activeService) || services[0];

    return (
        <section className="py-8 md:py-16 px-4 md:px-20 bg-background relative z-10">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 md:gap-12">

                {/* Header */}
                <div className="flex flex-col items-center gap-8 max-w-[1096px]">
                    <div className="flex flex-col items-center gap-4">
                        <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-foreground/20 backdrop-blur-[10px] bg-white/5">
                            <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                                الخدمات السريعة
                            </span>
                        </div>
                        <h2 className="text-text-primary text-center text-[20px] md:text-[28px] font-bold leading-7 md:leading-10 tracking-[0.25px]">
                            خدماتنا معك أينما كنت
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-row md:flex-nowrap items-center gap-2 md:gap-3.5 overflow-x-auto md:overflow-visible w-full md:w-auto px-4 md:px-0 justify-start md:justify-center pb-4 md:pb-0 snap-x md:snap-none">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(service.id)}
                                className={`flex h-[44px] md:h-[52px] px-4 md:px-6 justify-center items-center gap-1.5 md:gap-2.5 rounded-lg transition-all shrink-0 snap-center border border-transparent ${activeService === service.id
                                    ? "bg-primary-blue text-white"
                                    : "bg-primary-blue/8 text-text-primary opacity-80 hover:bg-primary-blue/15"
                                    }`}
                            >
                                <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                                <span className="text-sm md:text-lg font-extrabold leading-6">
                                    {service.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Display */}
                <div className="w-full h-[350px] md:h-[400px] rounded-[16px] md:rounded-[32px] bg-surface-dark overflow-hidden relative shadow-2xl">
                    {/* Background Image with animation key to force re-render/animation on switch */}
                    <div key={currentService.image} className="absolute inset-0 animate-in fade-in duration-500">
                        <img
                            src={currentService.image}
                            alt={currentService.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-l from-surface-dark/95 via-surface-dark/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent md:hidden" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-y-0 right-0 flex flex-col justify-center items-start md:items-start text-right p-6 md:p-12 md:pr-20 max-w-full md:max-w-[600px] z-10">
                        <div key={currentService.id} className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-500">
                            <div>
                                <h3 className="text-white text-[24px] md:text-[32px] font-bold leading-tight mb-2">
                                    {currentService.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-md">
                                    {currentService.description}
                                </p>
                            </div>

                            <ul className="space-y-2">
                                {currentService.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-2">
                                <Button
                                    onClick={() => onOrderClick(currentService.id)}
                                    className="h-12 px-8 font-bold bg-[#FF4D4D] hover:bg-[#FF3333] text-white rounded-xl shadow-lg shadow-red-500/10 transition-all hover:scale-105"
                                >
                                    اطلب {currentService.title} الآن
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
