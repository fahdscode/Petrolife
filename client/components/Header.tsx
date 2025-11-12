import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1348px] px-4">
      <div className="flex items-center justify-between gap-7 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-3.5 py-2.5">
        {/* Right side - Logo */}
        <div className="flex items-center gap-1">
          <div className="text-white text-xl font-bold">بترولايف</div>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden lg:flex items-start gap-7">
          <Link
            to="/"
            className="px-2.5 py-2.5 text-[#4DB1FF] text-center text-base font-bold leading-6"
          >
            الرئيسية
          </Link>
          <button className="px-2.5 py-2.5 text-white text-center text-base font-normal leading-6 flex items-center gap-0">
            <span>عنا</span>
          </button>
          <button className="px-2.5 py-2.5 text-white text-center text-base font-normal leading-6 flex items-center gap-0">
            <span>خدماتنا</span>
            <svg
              className="w-4 h-4"
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
          </button>
          <button className="px-2.5 py-2.5 text-white text-center text-base font-normal leading-6">
            تطبيقاتنا
          </button>
          <button className="px-2.5 py-2.5 text-white text-center text-base font-normal leading-6">
            بترولايف للشركات
          </button>
          <button className="px-2.5 py-2.5 text-[#FF5C77] text-center text-base font-normal leading-6 flex items-center gap-1 pb-1">
            <span>الإنقاذ السريع</span>
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
        </nav>

        {/* Left side - Actions */}
        <div className="flex items-center gap-3.5">
          <div className="hidden lg:flex items-center gap-3">
            {/* Language & Dark Mode */}
            <button className="w-12 h-12 rounded-full border border-[#A9B4BE]/30 flex items-center justify-center">
              <span className="text-white text-[19.2px] font-normal leading-[28.8px]">
                En
              </span>
            </button>
            <button className="w-12 h-12 rounded-full border border-[#A9B4BE]/30 flex items-center justify-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex h-12 px-4 justify-center items-center gap-1 rounded-full border border-white/50">
              <span className="text-white text-base font-bold leading-6">
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
        </div>
      </div>
    </header>
  );
}
