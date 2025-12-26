import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background py-8 px-4 md:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Logo & Description */}
          <div className="flex flex-col items-end gap-4 max-w-[296px]">
            <Link to="/" className="flex items-center gap-1 ml-auto" aria-label="الصفحة الرئيسية">
              <img
                src="/logo.png"
                alt="شعار بترولايف"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-text-primary text-sm leading-[22.4px] text-right opacity-75">
              بترولايف منصة متخصصة في إدارة وتتبع استهلاك الوقود، صُممت لتلبية
              احتياجات الشركات والمؤسسات التي تسعى إلى رفع كفاءتها التشغيلية وتقليل
              نفقاتها.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            {/* Quick Links */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-text-primary text-lg font-extrabold opacity-80">
                الوصول السريع:
              </h3>
              <div className="flex flex-col items-start gap-1.5 opacity-80">
                <Link
                  to="/"
                  className="text-text-primary text-sm leading-[22.4px] hover:text-primary-blue transition-colors"
                >
                  عن بترولايف
                </Link>
                <Link
                  to="/"
                  className="text-text-primary text-sm leading-[22.4px] hover:text-primary-blue transition-colors"
                >
                  الأسئلة الشائعة
                </Link>
                <Link
                  to="/"
                  className="text-text-primary text-sm leading-[22.4px] hover:text-primary-blue transition-colors"
                >
                  تواصل معنا
                </Link>
                <Link
                  to="/"
                  className="text-text-primary text-sm leading-[22.4px] hover:text-primary-blue transition-colors"
                >
                  انضم إلينا كمزود خدمة
                </Link>
                <Link
                  to="/"
                  className="text-text-primary text-sm leading-[22.4px] hover:text-primary-blue transition-colors"
                >
                  أراء عملائنا
                </Link>
                <Link
                  to="/"
                  className="text-text-primary text-sm leading-[22.4px] hover:text-primary-blue transition-colors"
                >
                  وفر مع بترولايف
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-text-primary text-lg font-extrabold opacity-80 ml-auto ">
                الخدمات:
              </h3>
              <div className="flex flex-col items-start gap-1.5 opacity-80">
                <span className="text-text-primary text-sm leading-[22.4px]">
                  وقود بالقرب منك
                </span>
                <span className="text-text-primary text-sm leading-[22.4px]">
                  توصيل الوقود
                </span>
                <span className="text-text-primary text-sm leading-[22.4px]">
                  غسيل السيارات
                </span>
                <span className="text-text-primary text-sm leading-[22.4px]">
                  تغيير الزيت
                </span>
                <span className="text-text-primary text-sm leading-[22.4px]">
                  البطاريات
                </span>
                <span className="text-text-primary text-sm leading-[22.4px]">
                  الإطارات
                </span>
                <span className="text-text-primary text-sm leading-[22.4px]">
                  خدمات الطوارئ
                </span>
              </div>
            </div>

            {/* Apps */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-text-primary text-lg font-extrabold opacity-80 ml-auto">
                حمل تطبيقاتنا:
              </h3>
              <div className="flex flex-col items-end gap-1.5 opacity-80 ml-auto">
                <span className="text-text-primary text-sm leading-[22.4px] ml-auto">
                  تطبيق الأفراد
                </span>
                <span className="text-text-primary text-sm leading-[22.4px] ml-auto">
                  تطبيق قائدي المركبات
                </span>
                <span className="text-text-primary text-sm leading-[22.4px] ml-auto">
                  تطبيق مزودي الخدمات
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-text-primary text-lg font-extrabold">
                تابعنا
              </h3>
              <div className="flex items-start gap-6">
                <a
                  href="https://x.com/petrolife_sa"
                  className="text-text-primary hover:text-primary-blue transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6829 4.6875H19.1639L13.7437 10.8825L20.1202 19.3125H15.1274L11.2169 14.1998L6.74241 19.3125H4.25993L10.0574 12.6863L3.94043 4.6875H9.05991L12.5947 9.36075L16.6829 4.6875ZM15.8122 17.8275H17.1869L8.31291 6.0945H6.83766L15.8122 17.8275Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/petrolife.sa"
                  className="text-text-primary hover:text-primary-blue transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0137 1.99902C6.49067 1.99902 2.01367 6.47602 2.01367 11.999C2.01367 16.814 5.45868 20.888 10.0147 21.804L10.0137 14.999H8.01367V11.999H10.0137V8.99902C10.0247 7.36502 11.3147 6.01802 13.0137 5.99902H16.0137V8.99902C16.0137 8.99902 14.3097 8.99902 14.0137 8.99902C13.4947 8.99802 13.0137 9.42902 13.0137 9.99902V11.999H16.0137L15.0137 14.999H13.0137L13.0207 21.961C18.0527 21.439 22.0137 17.169 22.0137 11.999C22.0137 6.47602 17.5367 1.99902 12.0137 1.99902Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/petrolife_sa?igsh=dXI0OWVnYW9xZjBt"
                  className="text-text-primary hover:text-primary-blue transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/petrolife-sa/?originalSubdomain=sa"
                  className="text-text-primary hover:text-primary-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 20H16.8V14.4008C16.8 12.8648 16.1224 12.008 14.9072 12.008C13.5848 12.008 12.8 12.9008 12.8 14.4008V20H9.60002V9.6H12.8V10.7696C12.8 10.7696 13.804 9.008 16.0664 9.008C18.3296 9.008 20 10.3888 20 13.2464V20ZM5.95362 7.9368C5.69605 7.93586 5.4412 7.88418 5.20361 7.78471C4.96602 7.68525 4.75036 7.53996 4.56894 7.35712C4.38752 7.17429 4.2439 6.95751 4.14628 6.71916C4.04867 6.48081 3.99896 6.22556 4.00002 5.968C3.99907 5.7105 4.04885 5.45534 4.14651 5.21708C4.24418 4.97883 4.38782 4.76214 4.56923 4.57939C4.75064 4.39665 4.96626 4.25142 5.2038 4.15201C5.44133 4.0526 5.69612 4.00094 5.95362 4C6.47351 4.00212 6.97129 4.21062 7.33749 4.57967C7.70369 4.94872 7.90833 5.4481 7.90642 5.968C7.90757 6.22553 7.85797 6.48076 7.76044 6.7191C7.66291 6.95745 7.51936 7.17423 7.33801 7.35708C7.15665 7.53992 6.94104 7.68523 6.7035 7.7847C6.46596 7.88417 6.21114 7.93586 5.95362 7.9368ZM4.00002 20H8.00002V9.6H4.00002V20Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-text-primary/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-50">
          <span className="text-text-primary text-sm leading-[22.4px]">
            <Link to="/privacy-policy" className="flex items-center gap-1" aria-label="سياسة الخصوصية">
              سياسة الخصوصية
            </Link>
          </span>
          <span className="text-text-primary text-sm leading-[22.4px] text-right">
            © جميع الحقوق محفوظة لشركة بترولايف.
          </span>
        </div>
      </div>
    </footer>
  );
}
