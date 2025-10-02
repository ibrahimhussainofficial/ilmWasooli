import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const appImages = [
  { src: "./app-img/admin.png", title: "Admin Panel" },
  { src: "./app-img/parent.png", title: "Parent Portal" },
  { src: "./app-img/student.png", title: "Student Dashboard" },
  { src: "./app-img/teacher.png", title: "Teacher Interface" },
];

export default function AppImagesCarousel() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2, // 2 slides on desktop/tablet
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12 text-gray-900">
        <h2
          className="text-3xl md:text-4xl font-extrabold"
          data-aos="fade-down"
        >
          Our App Screenshots
        </h2>
        <p
          className="mt-3 text-lg max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Check out the app interfaces.
        </p>
      </div>

      <div
        className="max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Slider {...settings}>
          {appImages.map(({ src, title }, idx) => (
            <div key={idx} className="px-4 flex flex-col items-center">
              <img
                src={src}
                alt={title}
                className="mx-auto h-[400px] object-contain rounded-3xl shadow-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
                {title}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
