import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

export default function SavingsCalculator() {
    const [formData, setFormData] = useState({
        refuelTime: "",
        deliveryTime: "",
        distance: "",
        vehicleCount: "",
        refuelsPerWeek: "",
        driverSalary: "",
    });
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState({
        annualSavings: 0,
        dailyFuelSaved: 0,
        extraJobs: 0,
        workersSaved: 0,
        fuelLitresSaved: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCalculate = () => {
        // Constants (Estimated for Saudi Market)
        const AVG_SPEED_KMH = 30;
        const FUEL_CONSUMPTION_KM_L = 8;
        const FUEL_PRICE_SAR = 2.33;
        const WORKING_DAYS_MONTH = 26;
        const WORKING_HOURS_DAY = 8;

        // Inputs
        const refuelTime = parseFloat(formData.refuelTime) || 0; // minutes
        const deliveryTime = parseFloat(formData.deliveryTime) || 120; // minutes (avoid div by 0)
        const distance = parseFloat(formData.distance) || 0; // km
        const vehicleCount = parseFloat(formData.vehicleCount) || 1;
        const refuelsPerWeek = parseFloat(formData.refuelsPerWeek) || 0;
        const driverSalary = parseFloat(formData.driverSalary) || 0;

        // 1. Time Cost Calculation
        // Round trip time + refueling time
        const travelTimeMinutes = (distance * 2 / AVG_SPEED_KMH) * 60;
        const tripTimeMinutes = refuelTime + travelTimeMinutes;

        // Total Annual Time Saved (Hours)
        const totalAnnualTimeSavedHours = (vehicleCount * refuelsPerWeek * 52 * tripTimeMinutes) / 60;

        // Labor Savings
        const hourlyRate = driverSalary / (WORKING_DAYS_MONTH * WORKING_HOURS_DAY);
        const laborSavings = totalAnnualTimeSavedHours * hourlyRate;

        // 2. Fuel Cost Calculation
        const tripDistanceKm = distance * 2;
        const totalAnnualDistanceKm = vehicleCount * refuelsPerWeek * 52 * tripDistanceKm;
        const fuelLitresSaved = totalAnnualDistanceKm / FUEL_CONSUMPTION_KM_L;
        const fuelCostSavings = fuelLitresSaved * FUEL_PRICE_SAR;

        // 3. Metrics
        const totalAnnualSavings = laborSavings + fuelCostSavings;
        const dailyFuelSaved = fuelLitresSaved / 365;
        const extraJobs = (totalAnnualTimeSavedHours * 60) / deliveryTime;
        const workersSaved = totalAnnualTimeSavedHours / (WORKING_HOURS_DAY * WORKING_DAYS_MONTH * 12);

        setResults({
            annualSavings: Math.round(totalAnnualSavings),
            dailyFuelSaved: Math.round(dailyFuelSaved),
            extraJobs: Math.round(extraJobs),
            workersSaved: parseFloat(workersSaved.toFixed(1)),
            fuelLitresSaved: Math.round(fuelLitresSaved),
        });
        setIsOpen(true);
    };

    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "k";
        return num.toString();
    };

    return (
        <section className="py-12 md:py-20 bg-background relative overflow-hidden">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-3xl bg-white dark:bg-surface-dark p-6 md:p-10 rounded-[32px] border border-border dark:border-white/10">
                    <DialogHeader className="flex flex-col items-center text-center gap-2 mb-8">
                        <DialogTitle className="text-[#101828] dark:text-white text-2xl md:text-[32px] font-bold leading-10">
                            قيمة التوفير
                        </DialogTitle>
                        <DialogDescription className="text-[#475467] dark:text-gray-300 text-lg font-normal leading-7">
                            فيما يلي إحصائيات حول قيمة التوفير للبيانات المدخلة.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Card 1: Daily Fuel Saved */}
                        <div className="p-6 bg-[#F9FAFB] dark:bg-white/5 rounded-2xl flex flex-col items-center gap-4 text-center">
                            <span className="text-[#475467] dark:text-gray-300 text-base font-medium">لتر وقود يومياً</span>
                            <h3 className="text-[#101828] dark:text-white text-3xl font-bold dir-ltr">
                                {formatNumber(results.dailyFuelSaved)} L
                            </h3>
                            <div className="flex items-center gap-2 text-[#027A48] text-sm font-medium bg-[#ECFDF3] px-3 py-1 rounded-full">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {formatNumber(results.fuelLitresSaved)} L سنوياً
                            </div>
                        </div>

                        {/* Card 2: Annual Savings */}
                        <div className="p-6 bg-[#F9FAFB] dark:bg-white/5 rounded-2xl flex flex-col items-center gap-4 text-center">
                            <span className="text-[#475467] dark:text-gray-300 text-base font-medium">الادخار السنوي</span>
                            <h3 className="text-[#101828] dark:text-white text-3xl font-bold text-right dir-rtl">
                                {formatNumber(results.annualSavings)} <span className="text-xl">ر.س</span>
                            </h3>
                            <div className="flex items-center gap-2 text-[#2E90FA] text-sm font-medium bg-[#EFF8FF] px-3 py-1 rounded-full">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                وبذلك يتم توفير {formatNumber(Math.round(results.annualSavings / 12))} ر.س شهرياً
                            </div>
                        </div>

                        {/* Card 3: Workers Equivalent */}
                        <div className="p-6 bg-[#F9FAFB] dark:bg-white/5 rounded-2xl flex flex-col items-center gap-4 text-center">
                            <span className="text-[#475467] dark:text-gray-300 text-base font-medium">عمال مشغولين</span>
                            <h3 className="text-[#101828] dark:text-white text-3xl font-bold">{results.workersSaved} عامل</h3>
                            <div className="flex items-center gap-2 text-[#7A5AF8] text-sm font-medium bg-[#F9F5FF] px-3 py-1 rounded-full">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#7A5AF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                يمكنك توظيفهم عبر التكاليف التي وفرتها
                            </div>
                        </div>

                        {/* Card 4: Extra Jobs */}
                        <div className="p-6 bg-[#F9FAFB] dark:bg-white/5 rounded-2xl flex flex-col items-center gap-4 text-center">
                            <span className="text-[#475467] dark:text-gray-300 text-base font-medium">وظيفة إضافية</span>
                            <h3 className="text-[#101828] dark:text-white text-3xl font-bold dir-rtl">{formatNumber(results.extraJobs)} وظيفة</h3>
                            <div className="flex items-center gap-2 text-[#F04438] text-sm font-medium bg-[#FEF3F2] px-3 py-1 rounded-full">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#F04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                من خلال توفير وقت التزود بالوقود
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full md:w-[240px] h-12 bg-[#5364CA] hover:bg-[#4352a8] text-white text-base font-semibold rounded-lg transition-colors"
                        >
                            حسنا
                        </button>
                    </div>
                </DialogContent>
            </Dialog>

            <div className="max-w-[1064px] mx-auto flex flex-col items-center gap-10 px-4">
                {/* Header content */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-foreground/20 backdrop-blur-[10px]">
                        <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                            احسب كم ستوفر مع بترولايف
                        </span>
                    </div>
                    <h2 className="text-text-primary text-[22px] md:text-[32px] font-bold leading-8 md:leading-[48px] tracking-[0.25px] max-w-[800px]">
                        اكتشف كيف يمكن لخدماتنا توفير الوقت والمال لك ولشركتك
                    </h2>
                </div>

                {/* Calculator Card */}
                <div className="w-full max-w-[800px] bg-[#F9FAFB] dark:bg-white/5 rounded-[32px] border border-[#EAECF0] dark:border-white/10 p-6 md:p-12 shadow-sm">
                    <div className="flex flex-col gap-6">
                        {/* Input Items */}
                        <div className="space-y-6">
                            {[
                                {
                                    label: "الوقت المستغرق لتعبئة الوقود",
                                    unit: "دقائق",
                                    name: "refuelTime",
                                },
                                {
                                    label: "الوقت المستغرق بعمليات التوصيل",
                                    unit: "دقائق",
                                    name: "deliveryTime",
                                },
                                {
                                    label: "المسافة التقريبية لمحطات الوقود",
                                    unit: "كم",
                                    name: "distance",
                                },
                                {
                                    label: "عدد المركبات الخاصة بشركتك",
                                    unit: "مركبات",
                                    name: "vehicleCount",
                                },
                                {
                                    label: "مرات تعبئة الوقود لكل مركبة / أسبوع",
                                    unit: "مرات",
                                    name: "refuelsPerWeek",
                                },
                                {
                                    label: "راتب السائق",
                                    unit: "ريال/شهر",
                                    name: "driverSalary",
                                    isLast: true, // Special styling maybe?
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8"
                                >
                                    <label className="text-text-primary text-base md:text-lg font-bold leading-7 text-right w-full">
                                        {item.label}
                                    </label>

                                    <div className="relative w-full md:w-[200px]">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm font-medium">
                                            {item.unit}
                                        </span>
                                        <input
                                            type="text"
                                            name={item.name}
                                            value={formData[item.name as keyof typeof formData]}
                                            onChange={handleChange}
                                            placeholder="0"
                                            className="w-full h-12 md:h-14 bg-[#F2F4F7] dark:bg-white/5 rounded-xl px-4 text-right text-text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all placeholder:text-text-secondary/50"
                                        />

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleCalculate}
                                className="h-14 px-8 bg-[#A93E00] hover:bg-[#8f3500] text-white text-lg font-bold rounded-xl transition-colors min-w-[240px]"
                            >
                                احسب قيمة التوفير
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
