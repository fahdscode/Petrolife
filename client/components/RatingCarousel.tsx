import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

export default function RatingCarousel() {
    const [emblaRef] = useEmblaCarousel({
        direction: "rtl",
        loop: true,
        align: "start",
        slidesToScroll: 1,
    });

    const ratings = [
        {
            id: 1,
            name: "هشام موسى",
            role: "المدير التنفيذي لشركة المرشدي",
            image: "/avatars/hisham.png",
            rating: 5,
            text: "ساعدت شركتي على التوفير في الخدمات المتعلقة بالوقود وخدمات السيارات عموما ، كنت أعاني في البداية من إدارة أسطول شركتي ، لكني الآن أستطيع إدارة كامل المركبات من مكان واحد.",
        },
        {
            id: 2,
            name: "أحمد علي",
            role: "مدير العمليات",
            image: "/avatars/ahmed.png",
            rating: 5,
            text: "منصة ممتازة وسهلة الاستخدام. وفرت علينا الكثير من الوقت والجهد في متابعة استهلاك الوقود. الدعم الفني متجاوب جداً والتقارير دقيقة.",
        },
        {
            id: 3,
            name: "سارة محمد",
            role: "مالكة شركة نقل",
            image: "/avatars/sara.png",
            rating: 5,
            text: "أنصح بشدة باستخدام بترولايف لكل من يدير أسطول مركبات. التحكم والشفافية في المصاريف أصبحت أسهل بكثير من ذي قبل.",
        },
        {
            id: 4,
            name: "خالد عبدالله",
            role: "مشرف نقليات",
            image: "/avatars/khaled.png",
            rating: 5,
            text: "تجربة رائعة مع بترولايف. التطبيق سهل جداً للسائقين والوحة التحكم تعطيني كل المعلومات اللي أحتاجها لاتخاذ القرارات.",
        },
        {
            id: 5,
            name: "منيره",
            role: "مديرة تشغيل",
            image: "/avatars/munira.png",
            rating: 5,
            text: "وفر علينا وقت وجهد كبير. بدل ما نعتمد على التخمين صارت الأرقام قدامنا. وهذا فرق معنا كثير بالإدارة.",
        },
        {
            id: 6,
            name: "محمد شبير",
            role: "سائق نقل ثقيل",
            image: "/avatars/mohammed.png",
            rating: 4,
            text: "أنا سواق . أستخدم التطبيق هذا كل يوم. التطبيق سهل مرة. محطات منتشرة في كل مكان . قبل في مشاكل، الحين كل شي سهل واستغنيت عن الدفع كاش ومشاويير للإدارة . بس ياليت تضيفو خدمات اكثر شكرا لكم.",
        },
        {
            id: 7,
            name: "عبدالله الحربي",
            role: "مدير قطاع نقل",
            image: "/avatars/abdullah.png",
            rating: 5,
            text: "صراحة بعد استخدام النظام لاحظنا فرق واضح في استهلاك الوقود. التقارير دقيقة وساعدتنا نعرف وين الهدر اللي ما كنا منتبهين له.",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-background overflow-hidden">
            <div className="w-full flex flex-col items-center gap-12">

                {/* Header */}
                <div className="flex flex-col items-center gap-6 text-center max-w-[1280px] mx-auto px-4 md:px-8">
                    <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-foreground/10 bg-background shadow-sm">
                        <span className="text-text-primary/70 text-base font-bold leading-6">
                            آراء عملائنا
                        </span>
                    </div>
                    <h2 className="text-text-primary text-3xl md:text-4xl font-bold leading-tight">
                        ماذا يقول عملاؤنا عنا؟
                    </h2>
                </div>

                {/* Carousel */}
                <div className="w-full relative px-4 md:px-8" dir="rtl">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-6 py-10"> {/* Negative margin for gap compensation */}
                            {ratings.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 pl-4 md:pl-6" // Padding left for gap
                                >
                                    <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-6 md:p-8 border border-gray-100 dark:border-zinc-800 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] h-full flex flex-col gap-6 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300">

                                        {/* Header: Avatar, Name, Rating */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <h4 className="text-text-primary text-base font-bold text-right">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-text-secondary text-xs font-medium opacity-80 text-right">
                                                        {item.role}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <span className="text-[#FF5C00] text-xl font-bold font-[Segoe UI]">
                                                    {item.rating}/5
                                                </span>
                                                <Star className="w-5 h-5 fill-[#FF5C00] text-[#FF5C00]" />
                                            </div>
                                        </div>

                                        {/* Divider - dashed line like in design if visible, or just border */}
                                        <div className="w-full h-px bg-gray-100 dark:bg-zinc-800"></div>

                                        {/* Body: Text */}
                                        <p className="text-text-secondary text-base leading-7 text-right select-none">
                                            {item.text}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
