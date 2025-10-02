import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const featureImages = [
  "./connect-img/By-Geo-Location.png",
  "./connect-img/By-Fingerprint.png",
  "./connect-img/By-RFID.png",
  "./connect-img/By-Barcode.png",
  "./connect-img/One-bill.png",
  "./connect-img/By-Push-Notification.png",
  "./connect-img/By-Branded-Message.png",
  "./connect-img/By-Whatsapp.png",
  "./connect-img/By-Email.png",
  "./connect-img/Quick-Pay.png",
];

const features = [
  "By Geo Location",
  "By Fingerprint",
  "By RFID",
  "By Barcode",
  "One bill",
  "By Push Notification",
  "By Branded Message",
  "By Whatsapp",
  "By Email",
  "Quick Pay",
];

const mainImage = "./connect-img/laptop.jpg";

export default function ConnectivitySimple() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto text-center mb-14 px-4">
        <h2
          className="text-4xl md:text-5xl font-extrabold"
          data-aos="fade-down"
        >
          Designed for effortless connectivity
        </h2>
        <p
          className="mt-4 max-w-3xl mx-auto text-lg md:text-xl font-light text-gray-600"
          data-aos="fade-up"
        >
          IlmWasooli connects with third-party software, applications, and
          devices to simplify management tasks and ensure efficient operations.
        </p>
      </div>

      {/* Center main image with floating animation */}
      <div
        className="flex justify-center mb-16"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <img
          src={mainImage}
          alt="Connectivity Illustration"
          className="w-[400px] h-[400px] object-contain animate-float"
          loading="lazy"
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Features grid - all 10 features */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            data-aos="zoom-in-up" // <-- changed animation here
            data-aos-delay={idx * 80}
            className="flex flex-col items-center cursor-pointer transform transition-transform hover:scale-110"
            title={feature}
          >
            <div className="bg-gray-100 rounded-full p-4 shadow-md mb-4">
              <img
                src={featureImages[idx]}
                alt={feature}
                className="w-14 h-14 object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-center text-sm font-semibold select-none leading-tight">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* TailwindCSS keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
