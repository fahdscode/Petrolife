import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const faqs = [
    {
        question: "1. متى أحتاج خدمة سحب المركبة؟",
        answer: "في حال تعذّر إصلاح العطل ميدانياً أو عند وقوع حادث لا قدر الله ، يمكن طلب سحب المركبة إلى الموقع الذي تحدده.."
    },
    {
        question: "2. ماذا أفعل إذا نفد الوقود؟",
        answer: "اطلب خدمتنا عبر الموقع الإلكتروني أو تطبيق بترولايف وسيصلك الوقود لموقعك بسرعة وأمان."
    },
    {
        question: "3. كم يستغرق وصول الوقود عادة؟",
        answer: "غالباً خلال 20–40 دقيقة حسب الموقع وظروف المرور.."
    },
    {
        question: "4. هل يمكن سحب السيارة لمسافة طويلة؟؟",
        answer: "نعم، حسب احتياجات العميل، مع تحديد الموقع النهائي مسبقاً."
    },
    {
        question: "5. هل تغطي خدماتكم جميع المناطق؟",
        answer: "تغطي خدمتنا للإنقاذ السريع مدينة الرياض وجده والشرقيه وفي توسع دائم الى أن نغطي جميع المناطق في المملكه "
    }
];

const FAQSection = () => {
    return (
        <section className="py-20 bg-surface-dark relative z-10">
            <div className="container px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5">
                        <span className="text-sm font-medium text-text-secondary">FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">الأسئلة الأكثر شيوعاً</h2>
                </div>

                <div dir="rtl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 rounded-xl bg-white/5 px-4 overflow-hidden">
                                <AccordionTrigger className="text-white hover:text-primary-blue hover:no-underline text-right text-lg py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-text-secondary text-right text-base leading-relaxed pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="flex justify-center mt-12">
                    <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full h-12 px-6">
                        عرض المزيد
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
