import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Floating animation styles
const CustomStyles = () => (
  <style>
    {`
      @layer utilities {
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      }
    `}
  </style>
);

export default function DownloadAppSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <CustomStyles />

      <section
        className="py-20 px-6 md:px-12 lg:px-20 text-white"
        style={{
          background: "linear-gradient(87deg, #2dce89 0%, #2dcecc 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
          {/* Text Content */}
          <div
            className="flex-1 text-center md:text-left md:pl-4"
            data-aos="fade-right"
          >
            <div className="max-w-md mx-auto md:mx-0">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
                Download Now and Get Started Immediately!
              </h2>
              <p className="mt-4 text-lg">
                Transform Your School, Madarasa, and Institute Today!
              </p>

              {/* Button */}
              <div className="mt-8 flex justify-center md:justify-start">
                <button className="flex items-center gap-3 border-2 border-white bg-transparent text-white hover:bg-white/20 font-semibold py-3 px-6 rounded-full shadow-lg transition-all">
                  <img
                    src="./playstore.png"
                    alt="Download Icon"
                    className="w-6 h-6"
                  />
                  <span>Download Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Image + Background Circle */}
          <div
            className="flex-1 relative w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto md:mx-0"
            data-aos="fade-left"
          >
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 w-72 h-72 md:w-80 md:h-80 bg-white opacity-20 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

            <img
              src="./app.png"
              alt="Best School Management"
              className="relative z-10 w-full max-h-[480px] object-contain animate-float"
            />
          </div>
        </div>
      </section>
    </>
  );
}
