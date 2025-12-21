import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Assets
const imgHero = "/assets/rapid-rescue/d505fc57f2660fd4c6e5ed976dc1d09772c02b85.png";
const imgWhatsapp = "/assets/rapid-rescue/9bf2d98ac85c23ab8cc27d3bf140321e3f2b7421.svg";

export default function RapidRescue() {
    return (
        <div className="min-h-screen bg-background text-right" dir="rtl">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img src={imgHero} alt="Rapid Rescue" className="absolute inset-0 w-full h-full object-cover" />

                <div className="relative z-20 container mx-auto px-4 flex flex-col items-center md:items-start text-center md:text-right text-white gap-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        خدمة الأنقاذ السريع
                        <br />
                        <span className="text-primary-blue">معك في كل مكان</span>
                    </h1>
                    <p className="text-lg md:text-2xl opacity-90 max-w-2xl">
                        نصلك أينما كنت وفي أي وقت. خدمة موثوقة وسريعة لجميع حالات الطوارئ على الطريق.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300">
                            اطلب الخدمة الآن
                        </button>
                        <a href="https://wa.me/" className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:scale-110 transition-transform">
                            <img src={imgWhatsapp} alt="WhatsApp" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">مميزات خدماتنا</h2>
                    <p className="text-text-secondary text-lg">لماذا تختار خدمة الأنقاذ السريع من بترولايف؟</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <img src="/assets/rapid-rescue/a163e01956cf5c4073ce16ff97bca357494ce700.svg" alt="Speed" className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">سرعة الاستجابة</h3>
                        <p className="text-text-secondary">فريقنا يصلك خلال وقت قياسي لضمان سلامتك وراحتك.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <img src="/assets/rapid-rescue/1b5ef4c6a491634e967c6f0366dfabd32b3fe14e.svg" alt="Security" className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">أمان وموثوقية</h3>
                        <p className="text-text-secondary">خدمات مؤمنة بالكامل مع فريق محترف ومدرب.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <img src="/assets/rapid-rescue/9f74cb92b8a9fcd6382b16cd9a22bbb990aec347.svg" alt="Cost" className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">أسعار تنافسية</h3>
                        <p className="text-text-secondary">نقدم أفضل الخدمات بأسعار تناسب الجميع دون رسوم خفية.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col items-center gap-4 group">
                        <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <img src="/assets/rapid-rescue/2b7cd76452cbaadfb451dee019550705d21f8d73.svg" alt="Quality" className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">جودة عالية</h3>
                        <p className="text-text-secondary">نستخدم أحدث المعدات والتقنيات لضمان أفضل خدمة.</p>
                    </div>
                </div>
            </section>

            {/* Additional Info / Graphics Section */}
            <section className="py-20 bg-gray-50 dark:bg-white/5">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-6 text-text-primary">كيف نعمل؟</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold flex-shrink-0">1</span>
                                <p className="text-text-secondary pt-1">اطلب الخدمة عبر الموقع أو التطبيق وحدد موقعك.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold flex-shrink-0">2</span>
                                <p className="text-text-secondary pt-1">يتواصل معك أقرب فريق إنقاذ فوراً.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold flex-shrink-0">3</span>
                                <p className="text-text-secondary pt-1">نصل إليك ونقوم بحل المشكلة أو نقل المركبة بأمان.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 order-1 md:order-2 flex justify-center">
                        <img src="/assets/rapid-rescue/33aa8143b13c6f72964e6fa1f7e7391a82a80838.png" alt="Tow Truck" className="max-w-md w-full drop-shadow-2xl" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
