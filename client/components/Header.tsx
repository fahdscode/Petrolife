import { Link } from "react-router-dom";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { useScrollBackground } from "@/hooks/use-scroll-background";
import { useState } from "react";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isLightBackground } = useScrollBackground();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1348px] px-4">
      <div className={`flex flex-col items-center rounded-full border backdrop-blur-sm transition-colors ${isLightBackground ? 'border-foreground/10 bg-foreground/[0.04]' : 'border-white/10 bg-white/[0.04]'}`}>
        <div className="flex items-center justify-between gap-[26px] w-full px-3.5 py-2.5">
        {/* Right side - Logo */}
        <div className="flex items-center gap-1">
          <div className={`text-xl font-bold transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>بترولايف</div>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden lg:flex items-start gap-[2px]">
          <Link
            to="/"
            className={`px-2.5 py-2.5 text-center text-base font-bold leading-6 transition-colors ${isLightBackground ? 'text-primary-blue' : 'text-[#4DB1FF]'}`}
          >
            الرئيسية
          </Link>
          <button className={`px-2.5 py-2.5 text-center text-base font-normal leading-6 flex items-center gap-0 transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>
            <span>عنا</span>
          </button>
          <button className={`px-2.5 py-2.5 text-center text-base font-normal leading-6 flex items-center gap-0 transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>
            <span>خدماتنا</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4C10 4 6.00001 6.94593 6 8C5.99999 9.05413 10 12 10 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={`px-2.5 py-2.5 text-center text-base font-normal leading-6 transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>
            تطبيقاتنا
          </button>
          <button className={`px-2.5 py-2.5 text-center text-base font-normal leading-6 transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>
            بترولايف للشركات
          </button>
          <button className={`px-2.5 py-2.5 text-center text-base font-normal leading-6 flex items-center gap-1 pb-1 transition-colors ${isLightBackground ? 'text-[#E73A6C]' : 'text-[#FF5C77]'}`}>
            <span>الإنقاذ السريع</span>
            <svg
              className="w-[18px] h-[18px]"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 15C6.07843 15 6.75 14.3284 6.75 13.5C6.75 12.6716 6.07843 12 5.25 12C4.42157 12 3.75 12.6716 3.75 13.5C3.75 14.3284 4.42157 15 5.25 15Z"
                stroke="currentColor"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.75 15C13.5784 15 14.25 14.3284 14.25 13.5C14.25 12.6716 13.5784 12 12.75 12C11.9216 12 11.25 12.6716 11.25 13.5C11.25 14.3284 11.9216 15 12.75 15Z"
                stroke="currentColor"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 7.5H12.6453C13.6683 7.5 13.9156 7.70272 14.1162 8.70585C14.1891 9.07065 14.1279 9.3495 14.5059 9.3798C15.1372 9.4305 15.5804 9.8544 15.8182 10.409C16.1593 11.2052 16.5 11.8743 16.5 12.75C16.5 13.1035 16.5 13.2803 16.3902 13.3902C16.2803 13.5 16.1035 13.5 15.75 13.5H14.25"
                stroke="currentColor"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>

        {/* Left side - Actions */}
        <div className="flex items-center gap-3.5">
          <div className="hidden lg:flex items-center gap-3">
            {/* Language & Dark Mode */}
            <button className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${isLightBackground ? 'border-[#34353472] text-text-primary' : 'border-[#A9B4BE]/30 text-white'}`}>
              <span className="text-[19.2px] font-normal leading-[28.8px] -mb-2">
                En
              </span>
            </button>
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${isLightBackground ? 'border-[#34353472] hover:bg-text-primary/5' : 'border-[#A9B4BE]/30 hover:bg-white/5'}`}
              aria-label={isDarkMode ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
            >
              {isDarkMode ? (
                <svg
                  className={`w-6 h-6 ${isLightBackground ? 'text-text-primary' : 'text-white'}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 12.0001C17 14.7615 14.7614 17.0001 12 17.0001C9.23858 17.0001 7 14.7615 7 12.0001C7 9.23864 9.23858 7.00006 12 7.00006C14.7614 7.00006 17 9.23864 17 12.0001Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 1.99995V3.49995M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98921L4.9286 4.92855M22 12H20.5M3.5 12H2M19.0713 4.92866L18.0106 5.98932M5.98975 18.0107L4.92909 19.0714"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  className={`w-6 h-6 ${isLightBackground ? 'text-text-primary' : 'text-white'}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className={`flex h-12 px-4 justify-center items-center gap-1 rounded-full border transition-colors ${isLightBackground ? 'border-text-primary/30 text-text-primary' : 'border-white/50 text-white'}`}>
              <span className="text-base font-bold leading-6">
                تسجيل الدخول
              </span>
            </button>
            <button className="flex h-12 px-4 justify-center items-center gap-1 rounded-full bg-primary-blue">
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
              <span className="text-white text-base font-bold leading-6">
                حمل التطبيق الآن
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${isLightBackground ? 'border-[#34353472] text-text-primary' : 'border-[#A9B4BE]/30 text-white'}`}
            aria-label="قائمة التنقل"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden w-full border-t px-4 py-4 ${isLightBackground ? 'border-foreground/10' : 'border-white/10'}`}>
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className={`px-4 py-2 text-right text-base font-bold leading-6 transition-colors ${isLightBackground ? 'text-primary-blue' : 'text-[#4DB1FF]'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <button className={`px-4 py-2 text-right text-base font-normal leading-6 transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>
                عنا
              </button>
              <button className={`px-4 py-2 text-right text-base font-normal leading-6 transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>
                خدماتنا
              </button>
              <button className={`px-4 py-2 text-right text-base font-normal leading-6 transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>
                تطبيقاتنا
              </button>
              <button className={`px-4 py-2 text-right text-base font-normal leading-6 transition-colors ${isLightBackground ? 'text-text-primary' : 'text-white'}`}>
                بترولايف للشركات
              </button>
              <button className={`px-4 py-2 text-right text-base font-normal leading-6 flex items-center gap-1 justify-end transition-colors ${isLightBackground ? 'text-[#E73A6C]' : 'text-[#FF5C77]'}`}>
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 15C6.07843 15 6.75 14.3284 6.75 13.5C6.75 12.6716 6.07843 12 5.25 12C4.42157 12 3.75 12.6716 3.75 13.5C3.75 14.3284 4.42157 15 5.25 15Z"
                    stroke="currentColor"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.75 15C13.5784 15 14.25 14.3284 14.25 13.5C14.25 12.6716 13.5784 12 12.75 12C11.9216 12 11.25 12.6716 11.25 13.5C11.25 14.3284 11.9216 15 12.75 15Z"
                    stroke="currentColor"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 7.5H12.6453C13.6683 7.5 13.9156 7.70272 14.1162 8.70585C14.1891 9.07065 14.1279 9.3495 14.5059 9.3798C15.1372 9.4305 15.5804 9.8544 15.8182 10.409C16.1593 11.2052 16.5 11.8743 16.5 12.75C16.5 13.1035 16.5 13.2803 16.3902 13.3902C16.2803 13.5 16.1035 13.5 15.75 13.5H14.25"
                    stroke="currentColor"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>الإنقاذ السريع</span>
              </button>

              {/* Mobile-only buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-current/10">
                <button className={`flex h-12 px-4 justify-center items-center gap-1 rounded-full border transition-colors ${isLightBackground ? 'border-text-primary/30 text-text-primary' : 'border-white/50 text-white'}`}>
                  <span className="text-base font-bold leading-6">
                    تسجيل الدخول
                  </span>
                </button>
                <button className="flex h-12 px-4 justify-center items-center gap-1 rounded-full bg-primary-blue">
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
                  <span className="text-white text-base font-bold leading-6">
                    حمل التطبيق الآن
                  </span>
                </button>
                
                <div className="flex items-center gap-3 justify-center pt-2">
                  <button className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${isLightBackground ? 'border-[#34353472] text-text-primary' : 'border-[#A9B4BE]/30 text-white'}`}>
                    <span className="text-[19.2px] font-normal leading-[28.8px] -mb-2">
                      En
                    </span>
                  </button>
                  <button
                    onClick={toggleDarkMode}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${isLightBackground ? 'border-[#34353472] hover:bg-text-primary/5' : 'border-[#A9B4BE]/30 hover:bg-white/5'}`}
                    aria-label={isDarkMode ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
                  >
                    {isDarkMode ? (
                      <svg
                        className={`w-6 h-6 ${isLightBackground ? 'text-text-primary' : 'text-white'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 12.0001C17 14.7615 14.7614 17.0001 12 17.0001C9.23858 17.0001 7 14.7615 7 12.0001C7 9.23864 9.23858 7.00006 12 7.00006C14.7614 7.00006 17 9.23864 17 12.0001Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 1.99995V3.49995M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98921L4.9286 4.92855M22 12H20.5M3.5 12H2M19.0713 4.92866L18.0106 5.98932M5.98975 18.0107L4.92909 19.0714"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={`w-6 h-6 ${isLightBackground ? 'text-text-primary' : 'text-white'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
