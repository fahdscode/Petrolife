import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { X, Upload, Building2, Ticket, MapPin, Mail, Lock, FileText, Phone } from "lucide-react";

interface JoinCompanyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function JoinCompanyModal({ isOpen, onClose }: JoinCompanyModalProps) {
    const [attachLater, setAttachLater] = useState(false);

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-50 backdrop-blur-sm" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-[32px] max-h-[90vh] overflow-y-auto">

                    <div className="flex flex-col items-center w-full">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute left-6 top-6 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Logo */}
                        <div className="mb-6">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="12" fill="#5A66C1" />
                                <path d="M24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12ZM24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33Z" fill="white" fillOpacity="0.2" />
                                <path d="M30 18H22C19.7909 18 18 19.7909 18 22V30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26 30H30C32.2091 30 34 28.2091 34 26V22C34 19.7909 32.2091 18 30 18Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <Dialog.Title className="text-2xl font-bold text-center mb-10 text-[#1F2937]">
                            انضم إلينا الآن واستمتع بإدارة شركتك الآن.
                        </Dialog.Title>

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-8 rtl" dir="rtl">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="اسم الشركة"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="اسم العلامة التجارية"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="رقم الهاتف"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <select
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 appearance-none bg-white text-gray-400"
                                >
                                    <option value="" disabled selected>المدينة</option>
                                    <option value="adh-dammam" className="text-gray-700">الدمام</option>
                                    <option value="riyadh" className="text-gray-700">الرياض</option>
                                    <option value="jeddah" className="text-gray-700">جدة</option>
                                </select>
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="العنوان بالتفصيل"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="السجل التجاري"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="الرقم الضريبي"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="تعيين كلمة المرور"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>
                        </div>

                        {/* Toggle Section */}
                        <div className="w-full flex items-center justify-end gap-3 mb-6 rtl" dir="rtl">
                            <span className="text-gray-700 font-medium text-base">الإرفاق لاحقاً</span>
                            <Switch.Root
                                dir="ltr"
                                checked={attachLater}
                                onCheckedChange={setAttachLater}
                                className="w-[42px] h-[25px] bg-gray-200 rounded-full relative data-[state=checked]:bg-[#5A66C1] outline-none cursor-pointer"
                            >
                                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                            </Switch.Root>
                        </div>

                        {/* Upload Section */}
                        {!attachLater && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-8 rtl" dir="rtl">
                                {[
                                    "ارفع شعار الشركة",
                                    "ارفع وثيقة السجل التجاري",
                                    "ارفع وثيقة شهادة الضرائب",
                                    "ارفع وثيقة العنوان الوطني \"اختياري\""
                                ].map((label, index) => (
                                    <button
                                        key={index}
                                        className="h-[120px] w-full border-2 border-dashed border-[#5A66C120] rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-[#5A66C105] transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#5B738B] group-hover:scale-110 transition-transform">
                                            <Upload size={20} />
                                        </div>
                                        <span className="text-[#5B738B] text-sm text-center px-4">{label}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Footer Actions */}
                        <div className="w-full flex items-center justify-between rtl" dir="rtl">
                            <button className="h-[56px] px-8 bg-[#5A66C1] hover:bg-[#48519A] text-white text-lg font-bold rounded-full transition-colors">
                                إنشاء حساب شركات
                            </button>

                            <div className="flex items-center gap-2">
                                <span className="text-[#5B738B] text-base">لديك حساب بالفعل؟</span>
                                <button className="h-[48px] px-6 border border-[#5A66C1] text-[#5A66C1] font-bold rounded-full hover:bg-[#5A66C105] transition-colors">
                                    تسجيل الدخول
                                </button>
                            </div>
                        </div>

                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
