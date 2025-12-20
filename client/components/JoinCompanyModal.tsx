import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { X, Upload, Building2, Ticket, MapPin, Mail, Lock, FileText, Phone, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// Placeholder URL - User needs to replace this
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyHKA2T3ZaHTDZO2SRaiJPkaM1MljtJH-jhiViNsUyzff3xfDpPq7K_Xose9QXCCY8j/exec";

const joinCompanySchema = z.object({
    companyName: z.string().min(1, "اسم الشركة مطلوب"),
    brandName: z.string().min(1, "اسم العلامة التجارية مطلوب"),
    phone: z.string().min(1, "رقم الهاتف مطلوب"),
    city: z.string().min(1, "المدينة مطلوبة"),
    address: z.string().min(1, "العنوان مطلوب"),
    commercialRegister: z.string().min(1, "السجل التجاري مطلوب"),
    taxNumber: z.string().min(1, "الرقم الضريبي مطلوب"),
    email: z.string().email("البريد الإلكتروني غير صالح"),
    password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

type JoinCompanyFormData = z.infer<typeof joinCompanySchema>;

interface JoinCompanyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function JoinCompanyModal({ isOpen, onClose }: JoinCompanyModalProps) {
    const [attachLater, setAttachLater] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<JoinCompanyFormData>({
        resolver: zodResolver(joinCompanySchema),
    });

    const onSubmit = async (data: JoinCompanyFormData) => {


        setIsSubmitting(true);
        try {
            // Using no-cors mode for Google Forms/Scripts usually, but for JSON response we need cors or handle opaque response.
            // Google Apps Script Web App simply returns JSON. We use 'no-cors' if we don't care about response, or standard if we do and script allows it.
            // The script I provided uses ContentService which supports CORS if deployed correctly.

            // Convert to URL parameters for x-www-form-urlencoded
            const formData = new URLSearchParams();
            Object.keys(data).forEach(key => {
                formData.append(key, data[key as keyof JoinCompanyFormData]);
            });

            // Standard fetch call for simple requests (no preflight)
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            });

            // With no-cors, we can't check response.ok or json. We assume success if no network error.
            toast.success("تم إرسال طلب الانضمام بنجاح!");
            reset();
            onClose();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error(`Error: ${(error as Error).message || "Unknown error"}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-50 backdrop-blur-sm" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-[32px] max-h-[90vh] overflow-y-auto">

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full">
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute left-6 top-6 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Logo */}
                        <div className="mb-6">
                            <img
                                src="/logo-modal.png"
                                alt="Petrolife Logo"
                                className="h-12 w-auto dark:brightness-0 dark:invert transition-all duration-300"
                            />
                        </div>

                        <Dialog.Title className="text-2xl font-bold text-center mb-10 text-[#1F2937]">
                            انضم إلينا الآن واستمتع بإدارة شركتك الآن.
                        </Dialog.Title>

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-8 rtl" dir="rtl">
                            <div className="relative">
                                <input
                                    {...register("companyName")}
                                    type="text"
                                    placeholder="اسم الشركة"
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.companyName ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400`}
                                />
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.companyName && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.companyName.message}</span>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("brandName")}
                                    type="text"
                                    placeholder="اسم العلامة التجارية"
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.brandName ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400`}
                                />
                                <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.brandName && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.brandName.message}</span>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("phone")}
                                    type="text"
                                    placeholder="رقم الهاتف"
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.phone ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400`}
                                />
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.phone && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.phone.message}</span>}
                            </div>

                            <div className="relative">
                                <select
                                    {...register("city")}
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.city ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 appearance-none bg-white text-gray-400`}
                                    defaultValue=""
                                >
                                    <option value="" disabled>المدينة</option>
                                    <option value="adh-dammam" className="text-gray-700">الدمام</option>
                                    <option value="riyadh" className="text-gray-700">الرياض</option>
                                    <option value="jeddah" className="text-gray-700">جدة</option>
                                </select>
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.city && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.city.message}</span>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("address")}
                                    type="text"
                                    placeholder="العنوان بالتفصيل"
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.address ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400`}
                                />
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.address && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.address.message}</span>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("commercialRegister")}
                                    type="text"
                                    placeholder="السجل التجاري"
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.commercialRegister ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400`}
                                />
                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.commercialRegister && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.commercialRegister.message}</span>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("taxNumber")}
                                    type="text"
                                    placeholder="الرقم الضريبي"
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.taxNumber ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400`}
                                />
                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.taxNumber && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.taxNumber.message}</span>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.email ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400`}
                                />
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.email && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.email.message}</span>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("password")}
                                    type="password"
                                    placeholder="تعيين كلمة المرور"
                                    className={`w-full h-14 pr-4 pl-12 rounded-2xl border ${errors.password ? "border-red-500" : "border-gray-200"} outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400`}
                                />
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                {errors.password && <span className="absolute -bottom-5 right-2 text-red-500 text-xs">{errors.password.message}</span>}
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
                                        type="button"
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
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-[56px] px-8 bg-[#5A66C1] hover:bg-[#48519A] text-white text-lg font-bold rounded-full transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting && <Loader2 className="animate-spin" size={20} />}
                                {isSubmitting ? "جاري الإرسال..." : "إنشاء حساب شركات"}
                            </button>

                            <div className="flex items-center gap-2">
                                <span className="text-[#5B738B] text-base">لديك حساب بالفعل؟</span>
                                <button type="button" className="h-[48px] px-6 border border-[#5A66C1] text-[#5A66C1] font-bold rounded-full hover:bg-[#5A66C105] transition-colors">
                                    تسجيل الدخول
                                </button>
                            </div>
                        </div>

                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
