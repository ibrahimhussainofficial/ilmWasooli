import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const statImages = [
  "./stats-img/city.png",
  "./stats-img/school.png",
  "./stats-img/teacher.png",
  "./stats-img/parents.png",
  "./stats-img/student.png",
];

const stats = [
  { label: "Cities", value: 9, image: statImages[0] },
  { label: "Schools", value: 80, image: statImages[1] },
  { label: "Teachers", value: 1280, image: statImages[2] },
  { label: "Parents", value: 11200, image: statImages[3] },
  { label: "Students", value: 31020, image: statImages[4] },
];

export default function StatsSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{
        background:
          "linear-gradient(135deg, #2dce89 0%, #26b57e 50%, #25a3d3 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12 text-white">
        <h2
          className="text-3xl md:text-4xl font-extrabold"
          data-aos="fade-down"
        >
          Our Fuel
        </h2>
        <p
          className="mt-3 text-lg max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Our clients satisfaction is our fuel.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {stats.map(({ label, value, image }, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
          >
            <img
              src={image}
              alt={label}
              className="w-16 h-16 mb-3 object-contain"
              loading="lazy"
            />
            <div className="text-2xl md:text-4xl font-extrabold text-gray-900">
              {value}
            </div>
            <div className="text-lg font-semibold text-gray-700">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
