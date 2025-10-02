import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Replace these with your actual image paths or URLs
const cardImages = [
  "./mang-icons/1.png",
  "./mang-icons/2.png",
  "./mang-icons/3.png",
];

const cards = [
  {
    title: "Madrasa Management System",
    description:
      "ILMWasooli is designed specifically for Madrasas, addressing the unique challenges and administrative hurdles faced by Madrasa management.",
    image: cardImages[0],
  },
  {
    title: "School Management System",
    description:
      "ILMWasooli is Developed for schools, seamlessly integrating all administrative departments and providing direct communication channels between parents, students, and staff.",
    image: cardImages[1],
  },
  {
    title: "Institute Management System",
    description:
      "ILMWasooli simplifies institute administration by streamlining complex procedures, offering user-friendly features designed to meet the specific needs of educational institutions.",
    image: cardImages[2],
  },
];

export default function InfoCards() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{
        background:
          "linear-gradient(135deg, #e6f6ef 0%, #d0f0de 50%, #b6e9cd 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
          data-aos="fade-down"
        >
          Change Smart Management System into <br />
          <span className="text-[#2dce89]">
            ILMWasooli-Educational Administration Solution
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {cards.map(({ title, description, image }, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 200}
            className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 cursor-pointer flex flex-col items-center text-center"
            style={{
              background: "linear-gradient(135deg, #2dce89 0%, #22b77a 100%)",
              color: "white",
              boxShadow:
                "0 10px 15px rgba(45, 206, 137, 0.4), 0 4px 6px rgba(45, 206, 137, 0.3)",
            }}
          >
            <img
              src={image}
              alt={title}
              className="w-20 h-20 mb-6 object-contain filter brightness-0 invert"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold mb-5">{title}</h3>
            <p className="flex-grow leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
