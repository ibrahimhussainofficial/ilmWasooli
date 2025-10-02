import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/Inquiry.png",
    title: "Inquiry",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/ADMISSION.png",
    title: "Admission Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/id%20card%20generator.png",
    title: "ID Card Generator",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/Student%20information.png",
    title: "Student Information",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/ACCOUNT%20&%20FEE.png",
    title: "Fee Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/ATTENDANCE.png",
    title: "Student Attendance",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/student%20portal.png",
    title: "Student Portal",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/home%20work.png",
    title: "Homework",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/PARENTS.png",
    title: "Planner",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/Parent%20portal.png",
    title: "Parent Portal",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/NOTICE%20BOARD.png",
    title: "Notice board",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/COMPLAINT.png",
    title: "Complaints",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/ONLINE%20EXAM.png",
    title: "Examination",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/RESULT.png",
    title: "Result Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/transport%20mangment.png",
    title: "Transport Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/question%20bank.png",
    title: "Question Bank",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/Teacher%20portal.png",
    title: "Teacher Portal",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/TIMETABLE.png",
    title: "Time Table",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/recrument.png",
    title: "Recruitment",
  },
  { image: "https://ilmwasooli.pk/assets/modal-icon/hrm.png", title: "HRM" },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/ATTENDANCE.png",
    title: "Student Attendance",
  }, // Duplicate?
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/ACCOUNT%20&%20FEE.png",
    title: "Accounts",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/HOSTEL.png",
    title: "Hostel Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/task%20mangment.png",
    title: "Task Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/LIBRARY.png",
    title: "Library Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/INVENTORY.png",
    title: "Inventory Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/placement%20management.png",
    title: "Placement & Alumni Management",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/EMAIL%20&%20SMS.png",
    title: "Messages (Push Notification, SIM, Branded and Whatsapp Messages)",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/user%20rights.png",
    title: "User Rights",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/REPORT.png",
    title: "Reporting",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/digital%20payment.png",
    title: "Digital Payment",
  },
  {
    image: "https://ilmwasooli.pk/assets/modal-icon/point%20of%20sale.png",
    title: "Point of Sale:(Cafeteria & Online Course / Uniform Purchase)",
  },
];

export default function FeaturesCarousel() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

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
          Our Features
        </h2>
        <p
          className="mt-3 text-lg max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Discover the features that make us stand out.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <Slider {...settings}>
          {features.map(({ title, image }, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center mx-2 min-h-[220px]">
                <img
                  src={image}
                  alt={title}
                  className="w-20 h-20 mb-4 object-contain"
                  loading="lazy"
                />
                <div className="flex-grow flex items-center justify-center">
                  <div className="text-lg font-semibold text-gray-700">
                    {title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
