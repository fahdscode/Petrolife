import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  const [activeService, setActiveService] = useState("fuel");
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[670px] bg-surface-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-93 bg-surface-dark"></div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8362221a1e91eb061bfc63f8bb4c37c483e0a111?width=2884"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-93 bg-surface-dark"></div>

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
      <section className="py-12 px-4 bg-white relative overflow-hidden">
        <div className="max-w-[1064px] mx-auto flex flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-4 max-w-[714px]">
            <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-[#4D4D4D]/20 backdrop-blur-[10px]">
              <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                أحصائياتنا
              </span>
            </div>
            <h2 className="text-text-primary text-center text-[28px] font-bold leading-10 tracking-[0.25px]">
              أرقام تتحدث عن ثقتكم بنا
            </h2>
          </div>

          <div className="w-full p-10 md:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-[#F5F5F5]/50 to-[#FAFAFA]/40">
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
      <section className="py-12 px-4 md:px-20 bg-white">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-end gap-10 text-right order-2 md:order-1">
            <div className="flex flex-col items-end gap-7">
              <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-[#4D4D4D]/20 backdrop-blur-[10px]">
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
                  استراتيجية لإدارة الموارد بكفاءة، تقليل الهدر، و��عزيز الاستدامة.
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
          <div className="p-7 rounded-[28px] bg-[#878787]/5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
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
              <span className="font-medium">الابتكار</span>: تطوير حلول تقنية متقدمة
              تلبي احتياجات العملاء المتغيرة.
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
            <div className="p-7 rounded-[28px] bg-[#878787]/5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl">👁️</span>
                <h3 className="text-text-primary text-xl font-bold leading-6">
                  رؤيتنا
                </h3>
              </div>
              <p className="text-text-primary text-lg leading-6 text-right">
                نهدف إلى تحويل إدارة الوقود إلى عملية ذكية وفعالة تعزز كفاءة
                الأساطيل وتدعم القرارات الاستراتيجية.
              </p>
            </div>

            <div className="p-7 rounded-[28px] bg-[#878787]/5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl">📋</span>
                <h3 className="text-text-primary text-xl font-bold leading-6">
                  رسالتنا
                </h3>
              </div>
              <p className="text-text-primary text-lg leading-6 text-right">
                نقدّم حلولاً ذكية وفعّالة لإدارة استهلاك الوقود، لتمكين الشركات من
                تقليل الهدر وتحسين الكفاءة التشغيلية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-8 max-w-[1096px]">
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-[#4D4D4D]/20 backdrop-blur-[10px]">
                <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                  خدماتنــــــــــا
                </span>
              </div>
              <h2 className="text-text-primary text-center text-[28px] font-bold leading-10 tracking-[0.25px]">
                خدماتنا الشاملة - كل ما تحتاجه في مكان واحد
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 justify-center">
              {[
                { id: "fuel", label: "توصيل الوقود", icon: "⛽" },
                { id: "wash", label: "غسيل السيارات", icon: "🚿" },
                { id: "oil", label: "زيت المحرك", icon: "🛢️" },
                { id: "battery", label: "البطاريات", icon: "🔋" },
                { id: "tires", label: "الإطارات", icon: "🛞" },
                { id: "emergency", label: "خدمات الطوارئ", icon: "🚨" },
              ].map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex h-[52px] px-4 justify-center items-center gap-2.5 rounded-lg ${
                    activeService === service.id
                      ? "bg-primary-blue"
                      : "bg-primary-blue/8"
                  }`}
                >
                  <span
                    className={`text-lg font-extrabold leading-6 ${
                      activeService === service.id
                        ? "text-white"
                        : "text-text-primary opacity-80"
                    }`}
                  >
                    {service.label}
                  </span>
                  <span className="text-2xl">{service.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Showcase */}
          <div className="w-full h-[335px] rounded-[32px] bg-surface-dark overflow-hidden relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/da8814d40ae34eef2024ea49c3ec814933922083?width=2560"
              alt="Service Preview"
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
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-16 bg-[#10132C] relative overflow-hidden">
        <div className="max-w-[1196px] mx-auto px-4 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-7 text-center">
            <h2 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
              حمّل تطبيقاتنا واستمتع بتجربة لا مثيل لها
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3.5">
              {[
                "بترولايف للأفراد",
                "بترولايف للشركات",
                "بترولايف لمزودي الخدمة",
              ].map((app, index) => (
                <button
                  key={index}
                  className={`flex h-[52px] px-4 justify-center items-center gap-2.5 rounded-lg ${
                    index === 0
                      ? "bg-primary-blue"
                      : "bg-primary-blue/8"
                  }`}
                >
                  <span
                    className={`text-lg font-extrabold leading-6 ${
                      index === 0 ? "text-white" : "text-white opacity-80"
                    }`}
                  >
                    {app}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "واجهة سهلة و متجاوبة",
              "طلب الخدمات بضغطة واحدة",
              "تتبع الطلب لحظة بلحظة",
              "نظام دفع آمن ومرن",
              "عروض وخصومات حصرية",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-1 justify-center"
              >
                <span className="text-white text-lg font-medium leading-[35px]">
                  {feature}
                </span>
                <span className="text-xl">✓</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 h-[52px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f77d990781825ef0dfab780097000c4a010c106c?width=352"
              alt="Download on App Store"
              className="h-full"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8ad441b3b09947f97ccfd4e8559bc5f5c45e7642?width=346"
              alt="Get it on Google Play"
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-[230px] bg-white">
        <div className="max-w-[980px] mx-auto flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-7 max-w-[755px]">
            <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-[#4D4D4D]/20 backdrop-blur-[10px]">
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
                a: "يمكنك طلب الخدمة بعدة طرق: تطبيق بترولايف للهواتف الذكية ، الموقع الإلكتروني ، ا��اتصال المباشر ، واتساب",
              },
              { q: "2. كم يستغرق وصول الخدمة؟", a: "" },
              { q: "3. هل الأسعار منافسة مقارنة بالطرق التقليدية؟", a: "" },
              { q: "4. ما هي طرق الدفع المتاحة؟", a: "" },
              { q: "5. هل تغطي خدماتكم جميع المناطق؟", a: "" },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-[#C6C6C6]/10 cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <button className="w-8 h-8 rounded-2xl border border-white/10 flex items-center justify-center">
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
        <div className="max-w-[1280px] mx-auto h-[359px] rounded-[28px] bg-[#7F321A] overflow-hidden relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/19ef58bde84dfa86c78abeecfcea55382c24cb9a?width=2560"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-14 right-20 md:right-[455px] max-w-[755px] flex flex-col items-end gap-11 text-right">
            <div className="flex flex-col items-end gap-2">
              <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-white/20 backdrop-blur-[10px]">
                <span className="text-white text-base font-bold leading-6 opacity-60">
                  انضم إلينا الآن
                </span>
              </div>
              <h2 className="text-white text-[28px] font-bold leading-10 tracking-[0.25px]">
                انضم إلى شبكة بترولايف واربح معنا
              </h2>
              <p className="text-white text-xl font-medium leading-7">
                كن شريكاً في منصة الخدمات الأسرع نمواً في المنطقة
              </p>
            </div>

            <button className="flex h-14 px-4 pr-1.5 items-center gap-3 rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)]">
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
      <section className="py-[136px] px-4 md:px-40 bg-white">
        <div className="max-w-full flex flex-col gap-15">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-15">
            <p className="max-w-[491px] text-text-primary text-base leading-6 opacity-50 text-right">
              يسعدنا دائمًا أن نستمع إليك! هل لديك سؤال؟ أو فكرة ترغب في طرحها؟
              لا تتردد أبدًا في مراسلتنا عبر الإيميل أو الواتساب. نحن نؤمن بأن
              التواصل الفعّال هو أساس الشراكة الناجحة.
            </p>

            <div className="flex flex-col items-end gap-7">
              <div className="inline-flex px-6 py-3 justify-center items-center gap-2.5 rounded-[40px] border border-[#4D4D4D]/20 backdrop-blur-[10px]">
                <span className="text-text-primary text-base font-bold leading-6 opacity-60">
                  تواصل معنا
                </span>
              </div>
              <h2 className="text-text-primary text-right text-[28px] font-bold leading-10 tracking-[0.25px] max-w-[422px]">
                تواصل معنا - نحن هنا لمساعدتك!
              </h2>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-white/4 shadow-[10px_10px_50px_rgba(0,0,0,0.1)]">
            <div className="grid md:grid-cols-2 gap-7">
              <div className="flex flex-col items-end gap-2 order-2 md:order-1">
                <label className="text-text-primary text-sm leading-[22.4px] text-right">
                  الرسالة
                </label>
                <textarea
                  placeholder="اكتب رسالتك هنا"
                  className="w-full h-[156px] px-4 py-3 rounded-xl border border-[#292929]/15 text-right resize-none focus:outline-none focus:ring-2 focus:ring-primary-blue"
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
                    className="w-full h-12 px-4 rounded-xl border border-[#292929]/15 text-right focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>

                <div className="flex flex-col items-end gap-2">
                  <label className="text-text-primary text-sm leading-[22.4px] text-right">
                    الإيميل
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full h-12 px-4 rounded-xl border border-[#292929]/15 text-right focus:outline-none focus:ring-2 focus:ring-primary-blue"
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
                <button className="w-full h-12 px-6 rounded-xl border border-dashed border-[#343434]/30 flex items-center justify-center gap-1 hover:border-primary-blue transition-colors">
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
