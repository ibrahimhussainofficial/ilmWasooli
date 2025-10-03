import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 font-sans px-6 sm:px-10 lg:px-20 py-20 mt-20 min-h-screen">
      <Helmet>
        <title>
          About Us – Logics Labs | Leading Software Company in Karachi
        </title>
        <meta
          name="description"
          content="Logics Labs is a top IT and software company based in Karachi, Pakistan. Since 2016, we’ve delivered innovative digital solutions including websites, mobile apps, desktop software, and ERP systems."
        />
        <meta
          name="keywords"
          content="Logics Labs, software company in Karachi, web development, mobile app development, ERP systems, IT services Pakistan"
        />
        <meta name="author" content="Logics Labs" />

        {/* Open Graph (for social media sharing) */}
        <meta
          property="og:title"
          content="About Logics Labs | Trusted IT Company in Karachi"
        />
        <meta
          property="og:description"
          content="Discover our mission, services, and team behind Logics Labs – a leading IT company delivering web, mobile, and ERP solutions across Pakistan."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <header
        className="max-w-4xl mx-auto text-center mb-20"
        data-aos="fade-down"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#2dce89] mb-6 drop-shadow-lg">
          Logics Labs
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
          Logics Lab is one of the leading IT and software companies in Karachi,
          Pakistan holding NTN 8232639-6. Our company is committed to delivering
          best‑in‑class IT products to the entire Pakistan to help our clients
          achieve their business goals. We provide cost‑effective and
          state‑of‑the‑art technologies, solutions & services since 2016.
        </p>
      </header>

      {/* Sections Container */}
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Section Template */}
        {[
          {
            id: "services",
            title: "Our Services",
            content: (
              <ul className="list-disc list-inside text-gray-700 space-y-2 sm:columns-2 sm:gap-8">
                <li>Web Design & Development</li>
                <li>Android/iOS Mobile Apps Design & Development</li>
                <li>Application Design & Development</li>
                <li>Desktop Base Software Solutions</li>
                <li>Graphic Designing</li>
                <li>Support Services</li>
                <li>Digital Marketing</li>
              </ul>
            ),
          },
          {
            id: "vision",
            title: "Our Vision",
            content: (
              <p className="text-gray-700 leading-relaxed max-w-prose">
                Logics Labs strives to provide and protect an environment that
                features “IT Abundance,” where IT infrastructure, services, and
                solutions are innovative, readily available, and utilized to
                support students, faculty, and staff in their endeavors to
                uphold the country mission.
              </p>
            ),
          },
          {
            id: "mission",
            title: "Our Mission",
            content: (
              <p className="text-gray-700 leading-relaxed max-w-prose">
                Our mission is to deliver optimum solutions with quality and
                services at affordable prices. We value our customers and
                nurture a strong, careful relationship.
              </p>
            ),
          },
          {
            id: "team",
            title: "Our Team",
            content: (
              <>
                <p className="text-gray-700 leading-relaxed mb-4 max-w-prose">
                  We have a rapidly growing team with expertise in various
                  technologies and frameworks, creating some of the best
                  products out there.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 max-w-prose">
                  We are constantly learning, working day and night to develop
                  the best. Helping each other to improve speed and quality is
                  our ethos.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-prose">
                  Most importantly, we are passionate and don’t stop until
                  you’re satisfied.
                </p>
              </>
            ),
          },
          {
            id: "situation",
            title: "Today’s Situation",
            content: (
              <>
                <p className="text-gray-700 leading-relaxed mb-6 max-w-prose">
                  Logics Labs provides the services you desire. We work hard and
                  smart to create software, mobile apps, websites, and more.
                </p>
                <h3 className="text-xl font-semibold text-[#2dce89] mb-4">
                  Our Work and Ongoing Projects
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 sm:columns-2 sm:gap-8 max-w-prose">
                  <li>Pharmaceutical Marketing Software</li>
                  <li>Pharmaceutical Marketing Sale</li>
                  <li>Pharma Activity System</li>
                  <li>Pharmacovigilance Research System</li>
                  <li>Monthly Collection System</li>
                  <li>Clinic Management System</li>
                  <li>Union Management System</li>
                  <li>WasooliPK ERP (For Internet & Cable)</li>
                  <li>Help Desk Management System</li>
                  <li>Bookshop Management System</li>
                  <li>Gym Management System</li>
                  <li>Event Management System</li>
                  <li>School Management System</li>
                  <li>Marketing ERP</li>
                </ul>
              </>
            ),
          },
          {
            id: "beliefs",
            title: "We Believe",
            content: (
              <div className="space-y-8 max-w-prose text-gray-700 leading-relaxed">
                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    In Long-Lasting Relationships
                  </h3>
                  <p>
                    IT is the exchange of ideas, the shared thrill of discovery,
                    and deep respect for our clients and community that define
                    our culture.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    We Work Closely With Our People
                  </h3>
                  <p>
                    Our teams, clients, and partners build long-term business
                    relationships and provide innovations that fuel the economy
                    and stimulate positive change.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    We Can Solve Any Challenge
                  </h3>
                  <p>
                    As a business grows, different issues require different
                    solutions. What worked a year ago may now be obsolete.
                  </p>
                </article>

                <article>
                  <p>
                    We help our clients develop new perspectives, actions, and
                    reactions to solve challenges and take their business
                    forward.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    In Ourselves and Our Team
                  </h3>
                  <p>
                    We treat everyone with warmth, empathy, and understanding.
                    This is why we love to interact with the people we work,
                    play, create, and travel with.
                  </p>
                </article>
              </div>
            ),
          },
        ].map(({ id, title, content }) => (
          <section
            key={id}
            className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transform hover:-translate-y-1 transition ease-out duration-300"
            data-aos="fade-up"
          >
            <header>
              <h2 className="text-3xl font-extrabold text-[#2dce89] border-b-4 border-[#2dce89] pb-3 mb-6 select-none">
                {title}
              </h2>
            </header>
            <div>{content}</div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
