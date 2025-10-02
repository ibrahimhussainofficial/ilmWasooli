import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const heroImages = [
  "./hero-imgs/1.png",
  "./hero-imgs/2.png",
  "./hero-imgs/3.png",
  "./hero-imgs/4.png",
];

// Helper to wrap each word in a span with animation delay
function AnimatedWords({ text, baseDelay = 0, className = "" }) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fadeUp"
          style={{ animationDelay: `${baseDelay + i * 0.1}s` }}
          aria-hidden="true"
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 4000);
  };

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pb-28 px-6 md:px-12 lg:px-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-anim -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            aria-label="The Fastest Growing Free Forever School Management Software"
          >
            <AnimatedWords text="The Fastest Growing" baseDelay={0.1} />
            <br />
            <span className="text-[#2dce89]">
              <AnimatedWords text="Free Forever" baseDelay={1} />
            </span>{" "}
            <br />
            <AnimatedWords
              text="School Management Software for up to 50 students."
              baseDelay={1}
            />
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            <AnimatedWords
              text="ILMWasooli is the ultimate school management solution designed for both mobile and web platforms. Accessible anytime, anywhere, ILMWasooli simplifies and enhances the management of your educational institution."
              baseDelay={2.5}
            />
          </p>

          <p className="mt-4 text-md font-medium text-[#2dce89] italic">
            <AnimatedWords
              text="Let's do ILM ki Wasooli With ILMWasooli."
              baseDelay={4.5}
            />
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#watch"
              className="inline-block bg-[#2dce89] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#28bd7c] transition duration-300"
            >
              WATCH
            </a>
            <a
              href="#demo"
              className="inline-block border border-[#2dce89] text-[#2dce89] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#2dce89] hover:text-white transition duration-300"
            >
              DEMO
            </a>
          </div>
        </div>

        {/* Right image / carousel part */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-center"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <div className="relative w-[280px] h-[480px] md:w-[320px] md:h-[520px] lg:w-[360px] lg:h-[560px] rounded-xl overflow-hidden">
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Hero ${index}`}
                loading="lazy"
                className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                  index === currentIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0 pointer-events-none"
                }`}
              />
            ))}

            {/* Arrow Buttons */}
            <button
              onClick={() => {
                goToPrev();
                resetAutoSlide();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={() => {
                goToNext();
                resetAutoSlide();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    goToIndex(idx);
                    resetAutoSlide();
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? "bg-[#2dce89]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
