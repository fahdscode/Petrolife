import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
    return (
        <section className="py-20 bg-background relative z-10">
            <div className="container px-4">
                <div className="text-center mb-12">
                    <div className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-surface-dark/50">
                        <span className="text-sm font-medium text-text-secondary">تواصل معنا</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">نحن هنا لمساعدتك!</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        لديك استفسار أو اقتراح؟ لا تتردد في مراسلتنا.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-surface-dark border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                    <form className="space-y-6" dir="rtl">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2 text-right">
                                <label className="text-white text-sm">الاسم</label>
                                <Input placeholder="اسمك الكريم" className="bg-white/5 border-white/10 h-12 text-white placeholder:text-white/30" />
                            </div>
                            <div className="space-y-2 text-right">
                                <label className="text-white text-sm">الإيميل</label>
                                <Input type="email" placeholder="example@email.com" className="bg-white/5 border-white/10 h-12 text-white text-right placeholder:text-white/30" />
                            </div>
                        </div>

                        <div className="space-y-2 text-right">
                            <label className="text-white text-sm">الرسالة</label>
                            <Textarea placeholder="اكتب رسالتك هنا..." className="bg-white/5 border-white/10 min-h-[150px] text-white placeholder:text-white/30 resize-none" />
                        </div>

                        <div className="flex justify-end pt-4">
                            <Button className="h-12 px-8 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-xl w-full md:w-auto">
                                إرسال الرسالة
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
