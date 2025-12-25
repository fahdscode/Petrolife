import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { X, Upload, Building2, Ticket, MapPin, Mail, Lock, FileText, Phone } from "lucide-react";
import { createCompanyUserFunction } from "../lib/firebaseFunctions";

interface JoinCompanyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function JoinCompanyModal({ isOpen, onClose }: JoinCompanyModalProps) {
    const [attachLater, setAttachLater] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        companyName: "",
        brandName: "",
        phone: "",
        city: "",
        address: "",
        commercialRecord: "",
        taxId: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {
        setError("");
        setLoading(true);

        try {
            // Validate required fields
            if (!formData.email || !formData.password || !formData.companyName || 
                !formData.brandName || !formData.phone || !formData.city || !formData.address) {
                setError("Please fill in all required fields.");
                setLoading(false);
                return;
            }

            // Call the Cloud Function to create user and company
            const result = await createCompanyUserFunction({
                email: formData.email,
                password: formData.password,
                name: formData.companyName,
                brandName: formData.brandName,
                phoneNumber: formData.phone,
                address: formData.address,
                city: formData.city,
                vatNumber: formData.taxId || undefined,
                commercialRegistrationNumber: formData.commercialRecord || undefined,
                // Optional fields - can be added later when file upload is implemented
                logo: undefined,
                taxCertificate: undefined,
                commercialRegistration: undefined,
                addressFile: undefined,
                formattedLocation: undefined,
            });

            if (result.success) {
                console.log("Account created successfully!", result);
                onClose();
            } else {
                setError(result.error || result.message || "An error occurred while creating the account.");
            }
        } catch (err: any) {
            console.error("Error creating account:", err);
            setError(err.message || "An error occurred while creating the account.");
        } finally {
            setLoading(false);
        }
    };

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
                            <img
                                src="/logo-modal.png"
                                alt="Petrolife Logo"
                                className="h-12 w-auto dark:brightness-0 dark:invert transition-all duration-300"
                            />
                        </div>

                        <Dialog.Title className="text-2xl font-bold text-center mb-5 text-[#1F2937]">
                            انضم إلينا الآن واستمتع بإدارة شركتك الآن.
                        </Dialog.Title>

                        {error && (
                            <div className="w-full mb-5 p-3 text-red-600 bg-red-100 rounded-lg text-right rtl" dir="rtl">
                                {error}
                            </div>
                        )}

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-8 rtl" dir="rtl">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="اسم الشركة"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="brandName"
                                    value={formData.brandName}
                                    onChange={handleChange}
                                    placeholder="اسم العلامة التجارية"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="رقم الهاتف"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <select
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 appearance-none bg-white text-gray-400"
                                >
                                    <option value="" disabled>المدينة</option>
                                    <option value="adh-dammam" className="text-gray-700">الدمام</option>
                                    <option value="riyadh" className="text-gray-700">الرياض</option>
                                    <option value="jeddah" className="text-gray-700">جدة</option>
                                </select>
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="العنوان بالتفصيل"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="commercialRecord"
                                    value={formData.commercialRecord}
                                    onChange={handleChange}
                                    placeholder="السجل التجاري"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="taxId"
                                    value={formData.taxId}
                                    onChange={handleChange}
                                    placeholder="الرقم الضريبي"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="البريد الإلكتروني"
                                    className="w-full h-14 pr-4 pl-12 rounded-2xl border border-gray-200 outline-none focus:border-[#5A66C1] focus:ring-1 focus:ring-[#5A66C1] transition-all text-right text-gray-700 placeholder:text-gray-400"
                                />
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
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
                            <button
                                onClick={handleRegister}
                                disabled={loading}
                                className="h-[56px] px-8 bg-[#5A66C1] hover:bg-[#48519A] text-white text-lg font-bold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "جاري الإنشاء..." : "إنشاء حساب شركات"}
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
