import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface RescueOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultService?: string;
}

const RescueOrderModal: React.FC<RescueOrderModalProps> = ({ isOpen, onClose, defaultService }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        serviceType: "",
        location: "",
        description: "",
    });

    useEffect(() => {
        if (defaultService) {
            setFormData(prev => ({ ...prev, serviceType: defaultService }));
        }
    }, [defaultService]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, serviceType: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        // Simulate submission
        toast.success("تم استلام طلبك بنجاح! سيتواصل معك فريقنا قريباً.");
        setTimeout(() => {
            onClose();
            setFormData({
                fullName: "",
                mobileNumber: "",
                serviceType: "",
                location: "",
                description: "",
            });
        }, 1500);
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px] bg-surface-dark border-white/10 text-white">
                <DialogHeader className="text-right space-y-3">
                    <DialogTitle className="text-2xl font-bold text-white">طلب إنقاذ سريع</DialogTitle>
                    <DialogDescription className="text-text-secondary">
                        أدخل بياناتك وموقعك، وسنصل إليك بأسرع وقت.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 text-right pt-4" dir="rtl">
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-white">الاسم الكامل</Label>
                        <Input
                            id="fullName"
                            placeholder="أدخل اسمك الكريم"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary-blue"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="mobileNumber" className="text-white">رقم الجوال</Label>
                        <Input
                            id="mobileNumber"
                            type="tel"
                            placeholder="05xxxxxxxx"
                            className="bg-white/5 border-white/10 text-white text-right placeholder:text-white/30 focus-visible:ring-primary-blue"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="serviceType" className="text-white">نوع الخدمة</Label>
                        <Select onValueChange={handleSelectChange} value={formData.serviceType} required>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-primary-blue flex-row-reverse">
                                <SelectValue placeholder="اختر الخدمة" />
                            </SelectTrigger>
                            <SelectContent className="bg-surface-dark border-white/10 text-white" dir="rtl">
                                <SelectItem value="fuel">توصيل وقود</SelectItem>
                                <SelectItem value="battery">شحن/تغيير بطارية</SelectItem>
                                <SelectItem value="tires">بنشر / تغيير إطارات</SelectItem>
                                <SelectItem value="towing">سطحة / سحب سيارة</SelectItem>
                                <SelectItem value="lockout">فتح أقفال</SelectItem>
                                <SelectItem value="other">أخرى</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="location" className="text-white">الموقع</Label>
                        <Input
                            id="location"
                            placeholder="حدد موقعك أو أقرب معلم"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary-blue"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-white">وصف المشكلة (اختياري)</Label>
                        <Textarea
                            id="description"
                            placeholder="تفاصيل إضافية..."
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[80px] focus-visible:ring-primary-blue resize-none"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-bold bg-[#FF4D4D] hover:bg-[#FF3333] text-white rounded-xl shadow-lg shadow-red-500/10"
                        >
                            إرسال الطلب
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default RescueOrderModal;
