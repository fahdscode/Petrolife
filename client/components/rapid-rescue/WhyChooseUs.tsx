import React from "react";
import { Timer, ShieldCheck, BarChart3, Star } from "lucide-react";

const features = [
    {
        icon: Timer,
        title: "سرعة استجابة استثنائية",
        description: "فريقنا جاهز لخدمتك على مدار الساعة في جميع المناطق.",
        color: "bg-[#8B5CF6]", // Purple
        lightColor: "bg-[#8B5CF6]/20",
        textColor: "text-[#8B5CF6]"
    },
    {
        icon: Star,
        title: "فنيون محترفون ومدربون",
        description: "نرسل لك مختصين معتمدين يملكون الخبرة والكفاءة في كل الحالات.",
        color: "bg-[#F59E0B]", // Orange
        lightColor: "bg-[#F59E0B]/20",
        textColor: "text-[#F59E0B]"
    },
    {
        icon: BarChart3,
        title: "تسعيرة واضحة وشفافة",
        description: "نضمن لك معرفة التكلفة قبل الخدمة بدون أي رسوم خفية.",
        color: "bg-[#EF4444]", // Red
        lightColor: "bg-[#EF4444]/20",
        textColor: "text-[#EF4444]"
    },
    {
        icon: ShieldCheck,
        title: "خدمة آمنة ومضمونة",
        description: "نعتني بسيارتك كأنها لنا لنضمن لك راحة واطمئنان دائماً.",
        color: "bg-[#10B981]", // Green
        lightColor: "bg-[#10B981]/20",
        textColor: "text-[#10B981]"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-background relative z-10">
            <div className="container px-4">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-base font-bold text-white/60">مميزاتنــــا</span>
                    </div>
                    <h2 className="text-3xl md:text-[28px] font-bold text-white mb-4">لماذا تختار بترولايف؟</h2>
                </div>

                {/* Main Card Container */}
                <div className="bg-[#1A1F26] rounded-[32px] p-8 md:p-12 border border-white/5">
                    <div className="grid md:grid-cols-4 divide-y divide-white/5 md:divide-y-0 md:divide-x md:divide-x-reverse" dir="rtl">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-start text-right group py-8 md:py-0 md:px-6 first:md:pr-0 last:md:pl-0">
                                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-8 h-8 text-white p-1" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-normal">
                                    {feature.title.split(' - ')[0]}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
