import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  const [activeService, setActiveService] = useState("fuel");
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeAppTab, setActiveAppTab] = useState<"individuals" | "companies" | "providers">("individuals");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[670px] bg-surface-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-93 bg-surface-dark bg-no-repeat bg-center bg-cover"></div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8362221a1e91eb061bfc63f8bb4c37c483e0a111?width=2884"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-93 bg-surface-dark bg-no-repeat bg-center bg-cover"></div>

        <div className="relative z-10 flex flex-col items-center gap-10 px-4 max-w-[714px] text-center mt-20">
          <div className="flex flex-col items-center gap-7">
            <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] bg-white/5 backdrop-blur-[10px]">
              <span className="text-white text-base font-bold leading-6">
                النظام التقني الشامل والمتكامل في إدارة إستهلاك الوقود
              </span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <h1 className="text-white text-[28px] md:text-[32px] font-bold leading-10 tracking-[0.25px]">
                بترولايف - "منصة واحدة… رؤية كاملة لاستهلاك الوقود.
              </h1>
              <p className="text-white text-lg leading-6 tracking-[0.16px]">
                حل تقني متطور يتيح مراقبة دقيقة، تقارير تفاعلية، ورؤية شاملة لإدارة
                استهلاك الوقود بفعالية،إدارة احترافية لاستهلاك الوقود تضمن
                الشفافية، الدقة، والتحكم الكامل في الموارد،إدارة ذكية لإستهلاك
                الوقود تساعد على تقليل النفقات والحد من الهدر،وتحسين الأداء، مهما
                كان حجم الأسطول، ويناسب مختلف القطاعات والأعمال.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <button className="flex h-14 px-4 pr-1.5 justify-between items-center gap-1 rounded-full border border-white/50">
              <span className="text-white text-base font-bold leading-6 px-3">
                اطلب خدمة عاجلة
              </span>
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 15C6.07843 15 6.75 14.3284 6.75 13.5C6.75 12.6716 6.07843 12 5.25 12C4.42157 12 3.75 12.6716 3.75 13.5C3.75 14.3284 4.42157 15 5.25 15Z"
                  stroke="#FF5C77"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.75 15C13.5784 15 14.25 14.3284 14.25 13.5C14.25 12.6716 13.5784 12 12.75 12C11.9216 12 11.25 12.6716 11.25 13.5C11.25 14.3284 11.9216 15 12.75 15Z"
                  stroke="#FF5C77"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7.5H12.6453C13.6683 7.5 13.9156 7.70272 14.1162 8.70585C14.1891 9.07065 14.1279 9.3495 14.5059 9.3798C15.1372 9.4305 15.5804 9.8544 15.8182 10.409C16.1593 11.2052 16.5 11.8743 16.5 12.75C16.5 13.1035 16.5 13.2803 16.3902 13.3902C16.2803 13.5 16.1035 13.5 15.75 13.5H14.25"
                  stroke="#FF5C77"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="flex h-14 px-4 pl-1.5 justify-between items-center gap-1 rounded-full bg-primary-blue">
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4C10 4 6.00001 6.94593 6 8C5.99999 9.05413 10 12 10 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white text-base font-bold leading-6 px-2">
                حمل التطبيق الآن
              </span>
            </button>
          </div>
        </div>

        {/* WhatsApp Fixed Button */}
        <div className="fixed bottom-8 left-8 z-50">
          <a
            href="https://wa.me/"
            className="flex w-20 h-20 items-center justify-center rounded-full bg-[#EAFFEC] shadow-lg hover:scale-110 transition-transform"
          >
            <svg
              className="w-[71px] h-[71px]"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5564 68.8889C52.7386 68.8889 66.6675 54.96 66.6675 37.7778C66.6675 20.5956 52.7386 6.66669 35.5564 6.66669C18.3742 6.66669 4.44531 20.5956 4.44531 37.7778C4.44531 43.3576 5.9142 48.5942 8.48636 53.1222L4.44531 68.8889L20.7006 65.1196C25.1151 67.5231 30.1762 68.8889 35.5564 68.8889ZM35.5564 64.1027C50.0953 64.1027 61.8813 52.3167 61.8813 37.7778C61.8813 23.2391 50.0953 11.453 35.5564 11.453C21.0176 11.453 9.23165 23.2391 9.23165 37.7778C9.23165 43.3913 10.9886 48.5945 13.9827 52.8671L11.6248 61.7094L20.6229 59.4598C24.8662 62.388 30.0111 64.1027 35.5564 64.1027Z"
                fill="#BFC8D0"
              />
              <path
                d="M62.222 35.5556C62.222 50.2831 50.2829 62.2222 35.5553 62.2222C29.938 62.2222 24.7262 60.4854 20.4279 57.5194L11.3129 59.798L13.7015 50.8409C10.6685 46.5127 8.88867 41.242 8.88867 35.5556C8.88867 20.828 20.8277 8.88892 35.5553 8.88892C50.2829 8.88892 62.222 20.828 62.222 35.5556Z"
                fill="url(#paint0_linear_whatsapp)"
              />
              <path
                d="M27.7776 21.1111C27.038 19.6254 25.9031 19.7569 24.7569 19.7569C22.7082 19.7569 19.5137 22.2109 19.5137 26.778C19.5137 30.5209 21.163 34.6182 26.7207 40.7471C32.0842 46.6622 39.1318 49.722 44.9825 49.618C50.8331 49.5138 52.0369 44.4791 52.0369 42.7787C52.0369 42.0251 51.5691 41.6491 51.2471 41.5469C49.2533 40.5902 45.576 38.8073 44.7393 38.4722C43.9027 38.1373 43.4658 38.5905 43.1942 38.8369C42.4356 39.56 40.9316 41.6909 40.4165 42.1702C39.9016 42.6496 39.1338 42.4069 38.8142 42.2258C37.6384 41.754 34.4507 40.336 31.9098 37.8727C28.7671 34.8265 28.5827 33.7785 27.9907 32.8453C27.5171 32.0991 27.8647 31.6411 28.038 31.4409C28.7151 30.6598 29.65 29.4536 30.0693 28.8542C30.4884 28.2549 30.1558 27.3447 29.956 26.778C29.0971 24.3402 28.3693 22.2998 27.7776 21.1111Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_whatsapp"
                  x1="58.8887"
                  y1="15.5556"
                  x2="8.88867"
                  y2="62.2222"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5BD066" />
                  <stop offset="1" stopColor="#27B43E" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-4 bg-background relative overflow-hidden">
        <div className="max-w-[1064px] mx-auto flex flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-4 max-w-[714px]">
            <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-foreground/20 backdrop-blur-[10px]">
              <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                أحصائياتنا
              </span>
            </div>
            <h2 className="text-text-primary text-center text-[28px] font-bold leading-10 tracking-[0.25px]">
              أرقام تتحدث عن ثقتكم بنا
            </h2>
          </div>

          <div className="w-full p-10 md:p-14 rounded-3xl border border-foreground/10 bg-gradient-to-br from-background/50 to-background/40 dark:from-background/80 dark:to-background/60">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  icon: "⏱️",
                  value: "15 دقيقة",
                  label: "وقت الاستجابة",
                  color: "#6C32A9",
                },
                {
                  icon: "⭐",
                  value: "98%",
                  label: "رضا العملاء",
                  color: "#E76500",
                },
                {
                  icon: "🏢",
                  value: "+1,000",
                  label: "شركة تثق بنا",
                  color: "#00C950",
                },
                {
                  icon: "⛽",
                  value: "+200",
                  label: "مزود خدمة معتمد",
                  color: "#EE3939",
                },
                {
                  icon: "👤",
                  value: "+50,000",
                  label: "عميل راضٍ",
                  color: "#5A66C1",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-end gap-3 text-right"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-text-primary text-lg font-extrabold leading-6">
                        {stat.value}
                      </span>
                      <span className="text-text-secondary text-sm font-medium leading-[22.4px] opacity-80">
                        {stat.label}
                      </span>
                    </div>
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-2xl"
                      style={{ backgroundColor: stat.color }}
                    >
                      {stat.icon}
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block w-px h-[108px] bg-white/10 absolute left-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-20 bg-background">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-end gap-10 text-right order-2 md:order-1">
            <div className="flex flex-col items-end gap-7">
              <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-[#4D4D4D]/20 backdrop-blur-[10px] ml-auto">
                <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                  من نحن؟
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <h2 className="text-text-primary text-right text-[28px] font-bold leading-10 tracking-[0.25px]">
                  بترولايف - "منصة واحدة… رؤية كاملة لاستهلاك الوقود.
                </h2>
                <p className="text-text-primary text-right text-lg leading-6 tracking-[0.16px]">
                  بترولايف منصة متخصصة في إدارة وتتبع استهلاك الوقود، صُممت لتلبية
                  احتياجات الشركات والمؤسسات التي تسعى إلى رفع كفاءتها التشغيلية
                  وتقليل نفقاتها. نعمل على تقديم حلول تقنية مبتكرة تساعد عملائنا
                  على مراقبة استهلاك الوقود بدقة، واستخراج تقارير تحليلية شاملة،
                  واتخاذ قرارات أكثر وعيًا وفاعلية.
                </p>
                <p className="text-text-primary text-right text-lg leading-6 tracking-[0.16px]">
                  نؤمن أن إدارة الوقود ليست مجرد متابعة أرقام، بل هي أداة
                  استراتيجية لإدارة الموارد بكفاءة، تقليل الهدر، وتعزيز الاستدامة.
                  ولذلك، نوفر نظامًا متطورًا يجمع بين السهولة، الدقة، والشفافية،
                  ليناسب مختلف أحجام الأعمال من الشركات الصغيرة إلى أساطيل النقل
                  الكبرى.
                </p>
                <p className="text-text-primary text-right text-lg leading-6 tracking-[0.16px]">
                  بخبرتنا التقنية وفريقنا المتخصص، نضع بين يديك منصة موثوقة تمنحك
                  رؤية كاملة وتحكمًا أذكى في استهلاك الوقود، لنكون شريكك في النجاح
                  والنمو.
                </p>
              </div>
            </div>

            <button className="flex h-14 px-4 pr-1.5 items-center gap-3 rounded-full border border-primary-blue justify-start ml-auto">
              <div className="w-11 h-11 rounded-full bg-[#0D3E64]/8 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 8L2 8"
                    stroke="#5A66C1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.33398 13.3333L2.00065 7.99996L7.33399 2.66663"
                    stroke="#5A66C1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-primary-blue text-base font-bold leading-6">
                خدماتنـــــــــــــــا
              </span>
            </button>
          </div>

          <div className="relative h-[685px] order-1 md:order-2">
            <div className="absolute top-14 right-12 w-[420px] h-[560px] rounded-[28px] bg-primary-blue overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0edbe4e279d8f1abdd8e62fdc1abb8756fc53f56?width=1256"
                alt="Dashboard Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 md:px-20">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-5">
          <div className="p-7 rounded-[28px] bg-foreground/5 flex flex-col gap-4">
            <div className="flex items-center justify-between ml-auto">
              <span className="text-2xl">💎</span>
              <h3 className="text-text-primary text-xl font-bold leading-6">
                قيمنا
              </h3>
            </div>
            <p className="text-text-primary text-lg leading-[31px] text-right">
              <span className="font-medium">الكفاءة</span>: تعزيز الاستخدام الأمثل
              للموارد وتحسين أداء الأساطيل.
              <br />
              <span className="font-medium">الشفافية</span>: تقديم بيانات دقيقة
              وتقارير واضحة لدعم اتخاذ القرار.
              <br />
              <span className="font-medium">الابتكار</span>: تطوير حلول ��قنية متقدمة
              تل��ي احتياجات العملاء المتغيرة.
              <br />
              <span className="font-medium">الاستدامة</span>: تقليل الهدر والحد من
              التلاعب.
              <br />
              <span className="font-medium">الموثوقية</span>: تقديم خدمات موثوقة تضمن
              رضا العملاء واستمرارية العمليات.
              <br />
              <span className="font-medium">الاحترافية</span>: التزام أعلى معايير
              الجودة والدقة في كل العمليات
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="p-7 rounded-[28px] bg-foreground/5 flex flex-col gap-4">
              <div className="flex items-center justify-between ml-auto">
                <span className="text-2xl">👁️</span>
                <h3 className="text-text-primary text-xl font-bold leading-6">
                  رؤيتنا
                </h3>
              </div>
              <p className="text-text-primary text-lg leading-6 text-right">
                نهدف إلى تحويل إدارة الوقود إلى عملية ذكية وفعالة ��عزز كفاءة
                الأساطيل وتدعم القرارات الاستراتيجية.
              </p>
            </div>

            <div className="p-7 rounded-[28px] bg-foreground/5 flex flex-col gap-4">
              <div className="flex items-center justify-between ml-auto">
                <span className="text-2xl">📋</span>
                <h3 className="text-text-primary text-xl font-bold leading-6">
                  رسالتنا
                </h3>
              </div>
              <p className="text-text-primary text-lg leading-6 text-right">
                نقدّم حلولاً ذاتية وفعّالة لإدارة استهلاك الوقود، لتمكين الشركات من
                تقليل الهدر وتحسين الكفاءة التشغيلية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-20 bg-background">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-8 max-w-[1096px]">
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-foreground/20 backdrop-blur-[10px]">
                <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                  خ��ماتنــــــــــا
                </span>
              </div>
              <h2 className="text-text-primary text-center text-[28px] font-bold leading-10 tracking-[0.25px]">
                خدماتنا الشاملة - كل ما تحتاجه في مكان واحد
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 justify-center">
              {[
                { id: "emergency", label: "خدمات الطوارئ", icon: "https://api.builder.io/api/v1/image/assets/TEMP/edb428b95f4a310b84e588f0728170ecd99a7564?width=64" },
                { id: "tires", label: "الإطارات", icon: "https://api.builder.io/api/v1/image/assets/TEMP/691ecd2874538f537e57ca461d9d604c060b278c?width=64" },
                { id: "battery", label: "البطاريات", icon: "https://api.builder.io/api/v1/image/assets/TEMP/9452797c385ef30aa3cb2dcc17a9e6d119475836?width=64" },
                { id: "oil", label: "زيت المحرك", icon: "https://api.builder.io/api/v1/image/assets/TEMP/d402ee0bf2af625acfc280bd518f04606e6cfe02?width=64" },
                { id: "wash", label: "غسيل السيارات", icon: "https://api.builder.io/api/v1/image/assets/TEMP/c8921cf59e30692d035957d47a3a9b7062ddb0d8?width=64" },
                { id: "fuel", label: "توصيل الوقود", icon: "https://api.builder.io/api/v1/image/assets/TEMP/7f9995a3c1ebb648345eeed678a751df28910608?width=64" },
              ].map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex h-[52px] px-3 justify-center items-center gap-2.5 rounded-lg transition-all ${
                    activeService === service.id
                      ? "bg-primary-blue"
                      : "bg-primary-blue/8"
                  }`}
                >
                  <img src={service.icon} alt="" className="w-8 h-8" />
                  <span
                    className={`text-lg font-extrabold leading-6 ${
                      activeService === service.id
                        ? "text-white"
                        : "text-text-primary opacity-80"
                    }`}
                  >
                    {service.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Showcase - Dynamic based on activeService */}
          <div className="w-full h-[335px] rounded-[32px] bg-surface-dark overflow-hidden relative">
            {activeService === "fuel" && (
              <>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da8814d40ae34eef2024ea49c3ec814933922083?width=2560"
                  alt="Fuel Delivery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-16 right-20 max-w-[324px] flex flex-col items-end gap-8 text-right">
                  <h3 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
                    وقودك يصلك أينما كنت!
                  </h3>
                  <div className="text-white text-lg font-medium leading-[35px]">
                    توصيل جميع أنواع الوقود (95، 91، ديزل)
                    <br />
                    خدمة 24/7 في جميع المناطق
                    <br />
                    أسعار منافسة ومضمونة
                    <br />
                    دفع آمن ومتنوع
                  </div>
                </div>
              </>
            )}

            {activeService === "wash" && (
              <>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9bec9af81d2cc32633bde535935b7eee8d56e2bf?width=2560"
                  alt="Car Wash"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-16 right-20 max-w-[324px] flex flex-col items-end gap-8 text-right">
                  <h3 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
                    نظافة احترافية لسيارتك!
                  </h3>
                  <div className="text-white text-lg font-medium leading-[35px]">
                    غسيل داخلي وخارجي شامل
                    <br />
                    استخدام مواد صديقة للبيئة
                    <br />
                    تنظيف المقاعد والسجاد
                    <br />
                    تلميع وحماية الطلاء
                  </div>
                </div>
              </>
            )}

            {activeService === "oil" && (
              <>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/50ff286df333dc8b8a9b32204eae7b2694b7ae5d?width=2560"
                  alt="Engine Oil"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-16 right-20 max-w-[354px] flex flex-col items-end gap-8 text-right">
                  <h3 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
                    عناية فائقة بمحرك سيارتك!
                  </h3>
                  <div className="text-white text-lg font-medium leading-[35px]">
                    زيوت عالية الجودة من أفضل الماركات
                    <br />
                    تغيير الفلاتر والفحص الشامل
                    <br />
                    استشارة مجانية لنوع الزيت المناسب
                    <br />
                    ضمان على الخدمة والمنتج
                  </div>
                </div>
              </>
            )}

            {activeService === "battery" && (
              <>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/eb982c4df0a2bb12230fa997aea22da18727fb72?width=2560"
                  alt="Battery Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-16 right-20 max-w-[324px] flex flex-col items-end gap-8 text-right">
                  <h3 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
                    طاقة لا تنضب لسيارتك!
                  </h3>
                  <div className="text-white text-lg font-medium leading-[35px]">
                    بطاريات أصلية بضمان شامل
                    <br />
                    فحص وتشخيص مجاني
                    <br />
                    خدمة الإنقاذ السريع
                    <br />
                    استبدال فوري وآمن
                  </div>
                </div>
              </>
            )}

            {activeService === "tires" && (
              <>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1095809809cba5bd51d08e4bf50c7993aca651fe?width=2560"
                  alt="Tires Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-16 right-20 max-w-[324px] flex flex-col items-end gap-8 text-right">
                  <h3 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
                    قيادة آمنة على كل الطرق!
                  </h3>
                  <div className="text-white text-lg font-medium leading-[35px]">
                    إطارات من أشهر الماركات العالمية
                    <br />
                    فحص ضغط الهواء مجاناً
                    <br />
                    خدمات الطوارئ والإصلاح
                    <br />
                    استشارة لاختيار الإطار المناسب
                  </div>
                </div>
              </>
            )}

            {activeService === "emergency" && (
              <>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b27cd1ccc67c4a616b3fb6723058347c660ea7ee?width=2560"
                  alt="Emergency Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-16 right-20 max-w-[382px] flex flex-col items-end gap-8 text-right">
                  <h3 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
                    نجدتك السريعة في أي وقت!
                  </h3>
                  <div className="text-white text-lg font-medium leading-[35px]">
                    استجابة خلال 15-30 دقيقة
                    <br />
                    فريق مدرب ومجهز
                    <br />
                    حلول فورية للأعطال البسيطة
                    <br />
                    خدمة القطر عند الحاجة
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-16 bg-[#10132C] relative overflow-hidden min-h-[752px]">
        {/* Background Decorative Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Horizontal gradient lines */}
          <div className="absolute left-[120px] top-0 w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[240px] top-0 w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[360px] top-0 w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[480px] top-0 w-[490px] h-0 opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[600px] top-0 w-[490px] h-0 opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[720px] top-0 w-[490px] h-0 opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[840px] top-0 w-[490px] h-0 opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[960px] top-0 w-[490px] h-0 opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[1080px] top-0 w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[1200px] top-0 w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[1320px] top-0 w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="absolute left-0 top-[120px] w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[950px] top-[120px] w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-0 top-[240px] w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[950px] top-[240px] w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-0 top-[360px] w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-[950px] top-[360px] w-[490px] h-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Decorative circles */}
          <div className="absolute left-[235px] top-[355px] w-2.5 h-2.5 rounded-full bg-white/[0.02] backdrop-blur-sm" />
          <div className="absolute left-[1195px] top-[235px] w-2.5 h-2.5 rounded-full bg-white/[0.02] backdrop-blur-sm" />
          <div className="absolute left-[1315px] top-[355px] w-2.5 h-2.5 rounded-full bg-white/[0.02] backdrop-blur-sm" />
          <div className="absolute left-[115px] top-[234px] w-2.5 h-2.5 rounded-full bg-white/[0.02] backdrop-blur-sm" />
        </div>

        {/* Large blurred background circle */}
        <div className="absolute left-[62px] top-[517px] w-[1320px] h-[1320px]">
          <div className="w-full h-full rounded-full bg-[#F4430C] blur-[190px]" />
        </div>

        <div className="max-w-[1196px] mx-auto px-4 flex flex-col items-center gap-10 relative z-10">
          <div className="flex flex-col items-center gap-7 text-center">
            <h2 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
              حمّل تطبيقاتنا واستمتع بتجرب�� لا مثيل لها
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={() => setActiveAppTab("providers")}
                className={`flex h-[52px] px-4 justify-center items-center gap-2.5 rounded-lg transition-all ${
                  activeAppTab === "providers"
                    ? "bg-primary-blue"
                    : "bg-primary-blue/8"
                }`}
              >
                <span
                  className={`text-lg font-extrabold leading-6 ${
                    activeAppTab === "providers" ? "text-white" : "text-white opacity-80"
                  }`}
                >
                  بترولايف لمزودي الخدمة
                </span>
              </button>
              <button
                onClick={() => setActiveAppTab("companies")}
                className={`flex h-[52px] px-4 justify-center items-center gap-2.5 rounded-lg transition-all ${
                  activeAppTab === "companies"
                    ? "bg-primary-blue"
                    : "bg-primary-blue/8"
                }`}
              >
                <span
                  className={`text-lg font-extrabold leading-6 ${
                    activeAppTab === "companies" ? "text-white" : "text-white opacity-80"
                  }`}
                >
                  بترولايف للشركات
                </span>
              </button>
              <button
                onClick={() => setActiveAppTab("individuals")}
                className={`flex h-[52px] px-4 justify-center items-center gap-2.5 rounded-lg transition-all ${
                  activeAppTab === "individuals"
                    ? "bg-primary-blue"
                    : "bg-primary-blue/8"
                }`}
              >
                <span
                  className={`text-lg font-extrabold leading-6 ${
                    activeAppTab === "individuals" ? "text-white" : "text-white opacity-80"
                  }`}
                >
                  بترولايف للأفراد
                </span>
              </button>
            </div>
          </div>

          {/* Features based on active tab */}
          {activeAppTab === "individuals" && (
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { text: "واجهة سهلة و متجاوبة", icon: "https://api.builder.io/api/v1/image/assets/TEMP/1f5d56a2a691101aae2481f9322df779fe8895b3?width=48" },
                { text: "ط��ب الخدمات بضغطة واحدة", icon: "https://api.builder.io/api/v1/image/assets/TEMP/aafb6fe84693103d7e7baf1311d61e9460512f22?width=48" },
                { text: "تتبع الطلب لحظة بلحظة", icon: "https://api.builder.io/api/v1/image/assets/TEMP/4d70ee1fd880c733997472e7c1c1e3f574662593?width=48" },
                { text: "نظام دفع آمن ومرن", icon: "https://api.builder.io/api/v1/image/assets/TEMP/5c93a2890b7beb7220236eb2ca1430403356534e?width=48" },
                { text: "عروض وخصومات حصرية", icon: "https://api.builder.io/api/v1/image/assets/TEMP/436398af1f391fccd11d3b37d564a743a96a45eb?width=48" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 justify-center"
                >
                  <img src={feature.icon} alt="" className="w-6 h-6" />
                  <span className="text-white text-lg font-medium leading-[35px]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeAppTab === "companies" && (
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { text: "خصومات خاصة للشركات", icon: "https://api.builder.io/api/v1/image/assets/TEMP/436398af1f391fccd11d3b37d564a743a96a45eb?width=48" },
                  { text: "فواتير موحدة وشاملة", icon: "https://api.builder.io/api/v1/image/assets/TEMP/62b091a295c7a736d9eb12b6e9fa953a313c4d4e?width=48" },
                  { text: "تقارير تفصيلية عن الاستهلاك", icon: "https://api.builder.io/api/v1/image/assets/TEMP/4075f995c99a51e3cc4dfde1a3b4041e57ca8564?width=48" },
                  { text: "إدارة شاملة لأساطيل الشركات", icon: "https://api.builder.io/api/v1/image/assets/TEMP/f468e3ca40695b28b82d809dc53e3ba90d1d7471?width=48" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 justify-center"
                  >
                    <img src={feature.icon} alt="" className="w-6 h-6" />
                  <span className="text-white text-lg font-medium leading-[35px]">
                    {feature.text}
                  </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { text: "تسجيل قائدو المركبات بالتطبيقات الخاصة بهم", icon: "https://api.builder.io/api/v1/image/assets/TEMP/4658c12111615a9ba897d2567b4cefc9918bf878?width=48" },
                  { text: "دعم فني متخصص", icon: "https://api.builder.io/api/v1/image/assets/TEMP/adfd14b3e71fb484bf332de4f1a2f06f052030a2?width=48" },
                  { text: "أولوية في الخدمة", icon: "https://api.builder.io/api/v1/image/assets/TEMP/ba9fd6ecd9faf5c23a8a6f7764e27e4f88e0e522?width=48" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 justify-center"
                  >
                    <img src={feature.icon} alt="" className="w-6 h-6" />
                  <span className="text-white text-lg font-medium leading-[35px]">
                    {feature.text}
                  </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeAppTab === "providers" && (
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { text: "نمو مستدام لأ��مالك", icon: "https://api.builder.io/api/v1/image/assets/TEMP/f44035fa1671627121e92fb889b446df7676293e?width=48" },
                { text: "دعم تقني شامل", icon: "https://api.builder.io/api/v1/image/assets/TEMP/adfd14b3e71fb484bf332de4f1a2f06f052030a2?width=48" },
                { text: "تدريب وتأهيل مستمر", icon: "https://api.builder.io/api/v1/image/assets/TEMP/ef59665d154a72f339a582e4618f56dc77da79b9?width=48" },
                { text: "مدفوعات سريعة وآمنة", icon: "https://api.builder.io/api/v1/image/assets/TEMP/410f0abd96be385b1da9c655977bd001697ae4a0?width=48" },
                { text: "نظام إدارة الطلبات الذكي", icon: "https://api.builder.io/api/v1/image/assets/TEMP/f468e3ca40695b28b82d809dc53e3ba90d1d7471?width=48" },
                { text: "رفع مستوى المبيعات", icon: "https://api.builder.io/api/v1/image/assets/TEMP/a19d228795dbea75376e3d87f17757184b50e369?width=48" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 justify-center"
                >
                  <img src={feature.icon} alt="" className="w-6 h-6" />
                  <span className="text-white text-lg font-medium leading-[35px]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4 h-[52px] flex-wrap justify-center">
            <svg
              width="157"
              height="53"
              viewBox="0 0 157 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-auto"
            >
              <rect x="0.651568" y="0.651568" width="155.073" height="50.8223" rx="8.47039" fill="black"/>
              <rect x="0.651568" y="0.651568" width="155.073" height="50.8223" rx="8.47039" stroke="#646464" strokeWidth="1.30314"/>
              <path d="M106.239 25.0214V28.0069H104.368V29.9647H106.239V36.6172C106.239 38.8888 107.267 39.7974 109.852 39.7974C110.306 39.7974 110.739 39.7434 111.118 39.6785V37.7422C110.793 37.7747 110.588 37.7963 110.231 37.7963C109.073 37.7963 108.565 37.2554 108.565 36.0223V29.9647H111.118V28.0069H108.565V25.0214H106.239Z" fill="white"/>
              <path d="M117.704 39.9597C121.143 39.9597 123.253 37.6557 123.253 33.8373C123.253 30.0405 121.133 27.7256 117.704 27.7256C114.264 27.7256 112.144 30.0405 112.144 33.8373C112.144 37.6557 114.253 39.9597 117.704 39.9597ZM117.704 37.8936C115.681 37.8936 114.545 36.4117 114.545 33.8373C114.545 31.2844 115.681 29.7917 117.704 29.7917C119.716 29.7917 120.862 31.2844 120.862 33.8373C120.862 36.4009 119.716 37.8936 117.704 37.8936Z" fill="white"/>
              <path d="M125.057 39.7325H127.383V32.7772C127.383 31.1222 128.627 30.008 130.39 30.008C130.801 30.008 131.494 30.0837 131.688 30.1486V27.8554C131.44 27.7905 130.996 27.7581 130.65 27.7581C129.114 27.7581 127.805 28.6018 127.47 29.7592H127.297V27.9528H125.057V39.7325Z" fill="white"/>
              <path d="M137.463 29.7051C139.183 29.7051 140.308 30.9058 140.362 32.7555H134.412C134.542 30.9166 135.743 29.7051 137.463 29.7051ZM140.351 36.5523C139.918 37.4718 138.956 37.9802 137.549 37.9802C135.689 37.9802 134.488 36.6713 134.412 34.6053V34.4755H142.731V33.6642C142.731 29.9647 140.751 27.7256 137.474 27.7256C134.153 27.7256 132.044 30.1162 132.044 33.8805C132.044 37.6449 134.11 39.9597 137.485 39.9597C140.178 39.9597 142.06 38.6617 142.59 36.5523H140.351Z" fill="white"/>
              <path d="M90.9879 35.3825C91.1673 38.275 93.5777 40.125 97.1654 40.125C101 40.125 103.399 38.1854 103.399 35.091C103.399 32.6581 102.031 31.3127 98.7126 30.5391L96.93 30.1018C94.8222 29.6085 93.9701 28.947 93.9701 27.7922C93.9701 26.3347 95.2931 25.3818 97.2776 25.3818C99.1611 25.3818 100.462 26.3123 100.697 27.8035H103.141C102.995 25.079 100.596 23.1619 97.3112 23.1619C93.7796 23.1619 91.4251 25.079 91.4251 27.9604C91.4251 30.3373 92.7593 31.7499 95.6855 32.4338L97.7709 32.9383C99.9123 33.4429 100.854 34.1828 100.854 35.4161C100.854 36.8512 99.3741 37.8939 97.356 37.8939C95.1922 37.8939 93.6899 36.9184 93.4768 35.3825H90.9879Z" fill="white"/>
              <path d="M66.8964 27.7581C65.2954 27.7581 63.9108 28.5585 63.1969 29.8998H63.0238V27.9528H60.7847V43.6483H63.1104V37.9477H63.2943C63.9108 39.1917 65.2413 39.9273 66.918 39.9273C69.8927 39.9273 71.7857 37.58 71.7857 33.8373C71.7857 30.0946 69.8927 27.7581 66.8964 27.7581ZM66.2365 37.8396C64.2894 37.8396 63.0671 36.3035 63.0671 33.8481C63.0671 31.3818 64.2894 29.8458 66.2473 29.8458C68.216 29.8458 69.3951 31.3493 69.3951 33.8373C69.3951 36.336 68.216 37.8396 66.2365 37.8396Z" fill="white"/>
              <path d="M79.9235 27.7581C78.3226 27.7581 76.938 28.5585 76.2241 29.8998H76.051V27.9528H73.8119V43.6483H76.1376V37.9477H76.3215C76.938 39.1917 78.2685 39.9273 79.9452 39.9273C82.9199 39.9273 84.8129 37.58 84.8129 33.8373C84.8129 30.0946 82.9199 27.7581 79.9235 27.7581ZM79.2637 37.8396C77.3166 37.8396 76.0943 36.3035 76.0943 33.8481C76.0943 31.3818 77.3166 29.8458 79.2745 29.8458C81.2432 29.8458 82.4223 31.3493 82.4223 33.8373C82.4223 36.336 81.2432 37.8396 79.2637 37.8396Z" fill="white"/>
              <path d="M56.6121 39.7325H59.2804L53.4392 23.5543H50.7372L44.896 39.7325H47.4747L48.9658 35.4385H55.1321L56.6121 39.7325ZM51.9593 26.4917H52.1499L54.4931 33.3307H49.6049L51.9593 26.4917Z" fill="white"/>
              <path d="M46.4585 11.3515V19.156H49.2763C51.602 19.156 52.9487 17.7228 52.9487 15.2294C52.9487 12.774 51.5912 11.3515 49.2763 11.3515H46.4585ZM47.67 12.4549H49.1411C50.7583 12.4549 51.7156 13.4825 51.7156 15.2457C51.7156 17.0359 50.7745 18.0527 49.1411 18.0527H47.67V12.4549Z" fill="white"/>
              <path d="M57.0733 19.2696C58.7932 19.2696 59.8478 18.1176 59.8478 16.2084C59.8478 14.31 58.7878 13.1526 57.0733 13.1526C55.3534 13.1526 54.2933 14.31 54.2933 16.2084C54.2933 18.1176 55.3479 19.2696 57.0733 19.2696ZM57.0733 18.2366C56.0619 18.2366 55.494 17.4956 55.494 16.2084C55.494 14.932 56.0619 14.1856 57.0733 14.1856C58.0793 14.1856 58.6526 14.932 58.6526 16.2084C58.6526 17.4902 58.0793 18.2366 57.0733 18.2366Z" fill="white"/>
              <path d="M68.8292 13.2662H67.6664L66.6172 17.7606H66.5252L65.3137 13.2662H64.1995L62.988 17.7606H62.9015L61.8468 13.2662H60.6678L62.2903 19.156H63.4856L64.6971 14.8184H64.7891L66.006 19.156H67.2121L68.8292 13.2662Z" fill="white"/>
              <path d="M70.1684 19.156H71.3312V15.7108C71.3312 14.7914 71.8775 14.2181 72.7374 14.2181C73.5974 14.2181 74.0084 14.6886 74.0084 15.6351V19.156H75.1713V15.343C75.1713 13.9422 74.4465 13.1526 73.1323 13.1526C72.2453 13.1526 71.6611 13.5474 71.3745 14.2018H71.288V13.2662H70.1684V19.156Z" fill="white"/>
              <path d="M77.0026 19.156H78.1654V10.9675H77.0026V19.156Z" fill="white"/>
              <path d="M82.5388 19.2696C84.2587 19.2696 85.3134 18.1176 85.3134 16.2084C85.3134 14.31 84.2533 13.1526 82.5388 13.1526C80.8189 13.1526 79.7588 14.31 79.7588 16.2084C79.7588 18.1176 80.8135 19.2696 82.5388 19.2696ZM82.5388 18.2366C81.5274 18.2366 80.9595 17.4956 80.9595 16.2084C80.9595 14.932 81.5274 14.1856 82.5388 14.1856C83.5448 14.1856 84.1181 14.932 84.1181 16.2084C84.1181 17.4902 83.5448 18.2366 82.5388 18.2366Z" fill="white"/>
              <path d="M88.778 18.2744C88.1452 18.2744 87.6855 17.9662 87.6855 17.4361C87.6855 16.9169 88.0533 16.6411 88.8646 16.587L90.3033 16.495V16.9872C90.3033 17.7174 89.6542 18.2744 88.778 18.2744ZM88.4806 19.2534C89.254 19.2534 89.8976 18.9181 90.2492 18.3285H90.3411V19.156H91.4607V15.1321C91.4607 13.8881 90.6278 13.1526 89.1512 13.1526C87.8153 13.1526 86.8634 13.8016 86.7444 14.813H87.8694C87.9992 14.3965 88.4481 14.1586 89.0971 14.1586C89.8922 14.1586 90.3033 14.5101 90.3033 15.1321V15.6405L88.7077 15.7324C87.3069 15.819 86.5173 16.4301 86.5173 17.4902C86.5173 18.5665 87.3448 19.2534 88.4806 19.2534Z" fill="white"/>
              <path d="M95.4067 19.2534C96.218 19.2534 96.9049 18.8694 97.2565 18.2258H97.3484V19.156H98.4626V10.9675H97.2997V14.2018H97.2132C96.8941 13.5528 96.2126 13.1688 95.4067 13.1688C93.9194 13.1688 92.9621 14.3479 92.9621 16.2084C92.9621 18.0743 93.9086 19.2534 95.4067 19.2534ZM95.7367 14.2126C96.7102 14.2126 97.3214 14.9861 97.3214 16.2138C97.3214 17.4469 96.7156 18.2095 95.7367 18.2095C94.7523 18.2095 94.1628 17.4578 94.1628 16.2084C94.1628 14.9698 94.7577 14.2126 95.7367 14.2126Z" fill="white"/>
              <path d="M106.003 19.2696C107.723 19.2696 108.778 18.1176 108.778 16.2084C108.778 14.31 107.718 13.1526 106.003 13.1526C104.283 13.1526 103.223 14.31 103.223 16.2084C103.223 18.1176 104.278 19.2696 106.003 19.2696ZM106.003 18.2366C104.992 18.2366 104.424 17.4956 104.424 16.2084C104.424 14.932 104.992 14.1856 106.003 14.1856C107.009 14.1856 107.582 14.932 107.582 16.2084C107.582 17.4902 107.009 18.2366 106.003 18.2366Z" fill="white"/>
              <path d="M110.317 19.156H111.48V15.7108C111.48 14.7914 112.026 14.2181 112.886 14.2181C113.746 14.2181 114.157 14.6886 114.157 15.6351V19.156H115.32V15.343C115.32 13.9422 114.595 13.1526 113.281 13.1526C112.394 13.1526 111.81 13.5474 111.523 14.2018H111.437V13.2662H110.317V19.156Z" fill="white"/>
              <path d="M120.675 11.8004V13.2932H119.74V14.2721H120.675V17.5984C120.675 18.7342 121.189 19.1885 122.482 19.1885C122.709 19.1885 122.925 19.1614 123.115 19.129V18.1609C122.952 18.1771 122.85 18.1879 122.671 18.1879C122.092 18.1879 121.838 17.9175 121.838 17.3009V14.2721H123.115V13.2932H121.838V11.8004H120.675Z" fill="white"/>
              <path d="M124.676 19.156H125.838V15.7162C125.838 14.8238 126.368 14.2235 127.32 14.2235C128.142 14.2235 128.58 14.6994 128.58 15.6405V19.156H129.743V15.3538C129.743 13.953 128.97 13.158 127.715 13.158C126.828 13.158 126.206 13.5528 125.919 14.2126H125.828V10.9675H124.676V19.156Z" fill="white"/>
              <path d="M133.938 14.1423C134.798 14.1423 135.361 14.7427 135.388 15.6675H132.413C132.478 14.7481 133.078 14.1423 133.938 14.1423ZM135.382 17.5659C135.166 18.0257 134.685 18.2799 133.981 18.2799C133.051 18.2799 132.451 17.6254 132.413 16.5924V16.5275H136.572V16.1219C136.572 14.2721 135.582 13.1526 133.944 13.1526C132.283 13.1526 131.228 14.3479 131.228 16.23C131.228 18.1122 132.262 19.2696 133.949 19.2696C135.296 19.2696 136.237 18.6206 136.502 17.5659H135.382Z" fill="white"/>
              <path d="M32.2776 26.4548C32.3058 24.2642 33.4822 22.1915 35.3485 21.0441C34.1711 19.3626 32.1991 18.2965 30.1474 18.2324C27.9592 18.0027 25.8377 19.5418 24.7226 19.5418C23.5859 19.5418 21.869 18.2552 20.0202 18.2932C17.6104 18.3711 15.3639 19.7411 14.1914 21.848C11.6712 26.2114 13.551 32.6242 15.9652 36.1513C17.1731 37.8784 18.5848 39.8077 20.4319 39.7392C22.2394 39.6643 22.9145 38.5866 25.0964 38.5866C27.258 38.5866 27.8913 39.7392 29.7759 39.6957C31.7155 39.6643 32.9375 37.961 34.103 36.2175C34.9709 34.9869 35.6387 33.6267 36.0817 32.1875C33.8024 31.2235 32.2802 28.9296 32.2776 26.4548Z" fill="white"/>
              <path d="M28.7178 15.9128C29.7753 14.6432 30.2964 13.0115 30.1702 11.364C28.5545 11.5337 27.0621 12.3059 25.9903 13.5267C24.9422 14.7195 24.3967 16.3226 24.4999 17.9071C26.1161 17.9237 27.705 17.1725 28.7178 15.9128Z" fill="white"/>
            </svg>

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5ac0f554d0c67222c37c6ed6fca1efa02c64957f?width=352"
              alt="Get it on Google Play"
              className="h-full w-auto"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/791f9b1b8ce35c9e46c397657f30d8ff6433dfc2?width=346"
              alt="Explore it on AppGallery"
              className="h-full w-auto"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-[230px] bg-background">
        <div className="max-w-[980px] mx-auto flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-7 max-w-[755px]">
            <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-foreground/20 backdrop-blur-[10px]">
              <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                FAQ
              </span>
            </div>
            <h2 className="text-text-primary text-center text-[28px] font-bold leading-10 tracking-[0.25px]">
              الأسئلة الأكثر شيوعاً
            </h2>
          </div>

          <div className="flex flex-col gap-[18px] w-full">
            {[
              {
                q: "1. كيف يمكنني طلب خدمة من بترولايف؟",
                a: "يمكنك طلب الخدمة بعدة طرق: تطبيق بترولايف للهواتف الذكية ، الموقع الإلكتروني ، الاتصال المباشر ، واتساب",
              },
              { q: "2. كم يستغرق وصول الخدمة؟", a: "" },
              { q: "3. هل الأسعار منافسة مقارنة بالطرق التقليدية؟", a: "" },
              { q: "4. ما هي طرق الدفع المتاحة؟", a: "" },
              { q: "5. هل تغطي خدماتكم جميع المناطق؟", a: "" },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-foreground/10 cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <button className="w-8 h-8 rounded-2xl border border-foreground/10 flex items-center justify-center">
                    <span className="text-text-primary">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  <h3 className="text-text-primary text-lg font-medium leading-6 flex-1 text-right mr-4">
                    {faq.q}
                  </h3>
                </div>
                {activeFaq === index && faq.a && (
                  <p className="mt-4 text-text-secondary text-base font-medium leading-6 text-right">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}

            <div className="flex justify-center mt-4">
              <button className="flex h-14 px-4 pr-1.5 items-center gap-3 rounded-full border border-primary-blue">
                <div className="w-11 h-11 rounded-full bg-[#0D3E64]/8 flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8L2 8"
                      stroke="#5A66C1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.33301 13.3332L1.99968 7.99984L7.33301 2.66651"
                      stroke="#5A66C1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-primary-blue text-base font-bold leading-6">
                  عرض المزيد
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-20">
        <div className="max-w-[1280px] mx-auto h-[359px] rounded-[28px] bg-[#7F321A] overflow-hidden relative flex flex-col">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/19ef58bde84dfa86c78abeecfcea55382c24cb9a?width=2560"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-14 right-20 md:right-[455px] max-w-[755px] flex flex-col items-end gap-11 text-right ml-auto md:mr-[-350px]">
            <div className="flex flex-col items-end gap-2">
              <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-white/20 backdrop-blur-[10px] ml-auto">
                <span className="text-white text-base font-bold leading-6 opacity-60">
                  انضم إلينا الآن
                </span>
              </div>
              <h2 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
                انضم إلى شبكة بترولايف واربح معنا
              </h2>
              <p className="text-white text-xl font-medium leading-7">
                كن شريكاً في منصة الخدمات الأسوع نمواً في المنطقة
              </p>
            </div>

            <button className="flex h-14 px-4 pr-1.5 items-center gap-3 rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] ml-auto">
              <div className="w-11 h-11 rounded-full bg-[#7F321A]/5 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 8L2 8"
                    stroke="#A93E00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.33398 13.3332L2.00065 7.99984L7.33399 2.66651"
                    stroke="#A93E00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-brand-orange-dark text-base font-bold leading-6">
                انضم إلينا الآن
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-[136px] px-4 md:px-40 bg-background">
        <div className="max-w-full flex flex-col gap-15">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-15">
            <div className="flex flex-col items-end gap-7">
              <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-[#4D4D4D]/20 backdrop-blur-[10px] ml-auto">
                <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                  تواصل معنا
                </span>
              </div>
              <h2 className="text-text-primary text-right text-[28px] font-bold leading-10 tracking-[0.25px] max-w-[422px]">
                تواصل معنا - نحن هنا لمساعدتك!
              </h2>
            </div>
            <p className="max-w-[491px] text-text-primary text-base leading-6 opacity-50 text-right">
              يسعدنا دائمًا أن نستمع إليك! هل لديك سؤال؟ أو فكرة ترغب في طرحها؟
              لا تتردد أبدًا في مراسلتنا عبر الإيميل أو الواتساب. نحن نؤمن بأن
              التواصل الفعّال هو أساس الشراكة الناجحة.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-background/50 shadow-[10px_10px_50px_rgba(0,0,0,0.1)]">
            <div className="grid md:grid-cols-2 gap-7">
              <div className="flex flex-col items-end gap-2 order-2 md:order-1">
                <label className="text-text-primary text-sm leading-[22.4px] text-right">
                  الرسالة
                </label>
                <textarea
                  placeholder="اكتب رسالتك هنا"
                  className="w-full h-[156px] px-4 py-3 rounded-xl border border-foreground/15 bg-background text-foreground text-right resize-none focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div className="flex flex-col gap-6 order-1 md:order-2">
                <div className="flex flex-col items-end gap-2">
                  <label className="text-text-primary text-sm leading-[22.4px] text-right">
                    الاسم
                  </label>
                  <input
                    type="text"
                    placeholder="هشام موسى"
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>

                <div className="flex flex-col items-end gap-2">
                  <label className="text-text-primary text-sm leading-[22.4px] text-right">
                    الإيميل
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-7 mt-7">
              <div className="flex flex-col gap-4 order-2 md:order-1">
                <button className="h-12 px-6 rounded-[40px] bg-primary-blue text-white text-base font-bold leading-6 hover:bg-primary-blue/90 transition-colors">
                  ارسال الرسالة
                </button>
              </div>

              <div className="flex flex-col items-end gap-2 order-1 md:order-2">
                <label className="text-text-primary text-sm leading-[22.4px] text-right">
                  مرفقات (اختياري)
                </label>
                <button className="w-full h-12 px-6 rounded-xl border border-dashed border-foreground/30 flex items-center justify-center gap-1 hover:border-primary-blue transition-colors">
                  <span className="text-text-secondary text-sm leading-[22.4px]">
                    ارفق الملفات هنا
                  </span>
                  <svg
                    className="w-[17px] h-[17px]"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5827 8.49984C15.5827 12.4118 12.4113 15.5832 8.49935 15.5832C4.58733 15.5832 1.41602 12.4118 1.41602 8.49984C1.41602 4.58782 4.58733 1.4165 8.49935 1.4165C12.4113 1.4165 15.5827 4.58782 15.5827 8.49984Z"
                      stroke="#5B738B"
                      strokeWidth="1.0625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3327 8.14583C11.3327 8.14583 9.24598 5.31251 8.49933 5.3125C7.75267 5.31249 5.66602 8.14583 5.66602 8.14583M8.49933 5.66667V11.6875"
                      stroke="#5B738B"
                      strokeWidth="1.0625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
