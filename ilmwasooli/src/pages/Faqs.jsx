// import React, { useState, useRef } from "react";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

// // FAQ Item Component
// const FAQItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const contentRef = useRef(null);

//   return (
//     <div
//       className={`mb-6 border border-gray-300 rounded-lg p-6 transition-shadow duration-300 ${
//         isOpen ? "shadow-lg bg-green-50" : "hover:shadow-md bg-white"
//       }`}
//     >
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex justify-between items-center text-left text-2xl font-semibold text-gray-900 focus:outline-none"
//       >
//         <span className="flex items-center gap-3">
//           <ChevronDownIcon
//             className={`w-6 h-6 text-[#2dce89] transform transition-transform duration-300 ${
//               isOpen ? "rotate-180" : ""
//             }`}
//             aria-hidden="true"
//           />
//           {question}
//         </span>
//       </button>
//       <div
//         ref={contentRef}
//         style={{
//           maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
//         }}
//         className="overflow-hidden transition-max-height duration-500 ease-in-out"
//       >
//         <p className="mt-4 text-gray-700 text-lg leading-relaxed">{answer}</p>
//       </div>
//     </div>
//   );
// };

// // FAQ Page Component
// const FAQPage = () => {
//   const faqData = [
//     {
//       question: "What is IlmWasooli?",
//       answer:
//         "IlmWasooliis a comprehensive school management system that streamlines the daily operations of educational institutions, offering dedicated portals for students, parents, teachers, and administrators.",
//     },
//     {
//       question: "What features are available in the Student Portal?",
//       answer:
//         "The Student Portal provides access to academic schedules, homework assignments, attendance records, grades, and notifications. Students can also interact with teachers and track their progress.",
//     },
//     {
//       question: "How does the Parent Portal work?",
//       answer:
//         "The Parent Portal allows parents to monitor their child's performance, view attendance reports, communicate with teachers, and stay updated on school events and fees.",
//     },
//     {
//       question:
//         "What functionalities are available for teachers in the Teacher Portal?",
//       answer:
//         "Teachers can manage class schedules, upload assignments, mark attendance, submit grades, and communicate directly with students and parents via the portal.",
//     },
//     {
//       question: "What tools does the Admin Portal provide?",
//       answer:
//         "The Admin Portal offers features to manage student and teacher records, class schedules, fee collection, payroll, and school event planning. It also includes dashboards for performance analytics.",
//     },
//     {
//       question: "Can parents and students pay fees online?",
//       answer:
//         "Yes, IlmWasooli includes an online fee payment system that allows parents and students to make payments securely and receive instant confirmations.",
//     },
//     {
//       question: "Does IlmWasooli support multiple languages?",
//       answer:
//         "Yes, IlmWasooli supports multiple languages, making it accessible for diverse user groups.",
//     },
//     {
//       question: "How does the system handle communication between users?",
//       answer:
//         "IlmWasooli has a built-in messaging system that enables seamless communication between students, parents, teachers, and administrators.",
//     },
//     {
//       question: "Is there a mobile app for IlmWasooli?",
//       answer:
//         "Yes, IlmWasooli offers a mobile app for Android and iOS, allowing users to access their portals on the go.",
//     },
//     {
//       question: "How secure is IlmWasooli?",
//       answer:
//         "IlmWasooli prioritizes data security by implementing encryption, secure logins, and role-based access controls to ensure user information is protected at all times.",
//     },
//   ];

//   return (
//     <div
//       className="mt-16 py-20 px-6 sm:px-16 lg:px-32 min-h-screen"
//       style={{
//         background:
//           "radial-gradient(circle at center, #8de6cc 0%, #ffffff 90%)",
//       }}
//     >
//       <div className="mx-auto max-w-3xl text-center mb-16">
//         <h2 className="text-5xl font-extrabold text-gray-900">
//           Frequently Asked Questions
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Everything you need to know about WasooliPK, answered in one place.
//         </p>
//       </div>
//       <div className="max-w-4xl mx-auto">
//         {faqData.map((item, index) => (
//           <FAQItem key={index} question={item.question} answer={item.answer} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQPage;

import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";

// FAQ Item Component
const FAQItem = ({ question, answer, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={`mb-6 border border-gray-300 rounded-lg p-6 transition-shadow duration-300 ${
        isOpen ? "shadow-lg bg-green-50" : "hover:shadow-md bg-white"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center ${
          lang === "ur" ? "justify-end" : "justify-between"
        } text-2xl font-semibold text-gray-900 focus:outline-none`}
      >
        <span
          className={`flex items-center gap-3 ${
            lang === "ur" ? "flex-row-reverse text-right" : "text-left"
          }`}
        >
          <ChevronDownIcon
            className={`w-6 h-6 text-[#2dce89] transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
          {question}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <p
          className={`mt-4 text-lg leading-relaxed ${
            lang === "ur" ? "text-right" : "text-left"
          }`}
          dir={lang === "ur" ? "rtl" : "ltr"}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

// Main FAQ Page Component
const FAQPage = () => {
  const [language, setLanguage] = useState("en"); // en or ur

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ur" : "en"));
  };

  // Bilingual FAQ data
  const faqData = [
    {
      en: {
        question: "What is IlmWasooli?",
        answer:
          "IlmWasooli is a comprehensive school management system that streamlines the daily operations of educational institutions.",
      },
      ur: {
        question: "IlmWasooli کیا ہے؟",
        answer:
          "IlmWasooli ایک جامع اسکول مینجمنٹ سسٹم ہے جو تعلیمی اداروں کی روزمرہ کی سرگرمیوں کو منظم کرتا ہے۔",
      },
    },
    {
      en: {
        question: "What features are available in the Student Portal?",
        answer:
          "The Student Portal provides access to academic schedules, homework, attendance, grades, and notifications.",
      },
      ur: {
        question: "اسٹوڈنٹ پورٹل میں کون سی خصوصیات ہیں؟",
        answer:
          "اسٹوڈنٹ پورٹل تعلیمی شیڈول، ہوم ورک، حاضری، نمبرز اور اطلاعات تک رسائی فراہم کرتا ہے۔",
      },
    },
    {
      en: {
        question: "How does the Parent Portal work?",
        answer:
          "The Parent Portal allows parents to monitor their child's performance, view attendance reports, and communicate with teachers.",
      },
      ur: {
        question: "پیرنٹ پورٹل کیسے کام کرتا ہے؟",
        answer:
          "پیرنٹ پورٹل والدین کو اپنے بچوں کی کارکردگی دیکھنے، حاضری رپورٹس دیکھنے اور اساتذہ سے رابطہ کرنے کی سہولت دیتا ہے۔",
      },
    },
    {
      en: {
        question: "What functionalities are available for teachers?",
        answer:
          "Teachers can manage class schedules, upload assignments, mark attendance, and communicate with students and parents.",
      },
      ur: {
        question: "اساتذہ کے لیے کون سی سہولیات دستیاب ہیں؟",
        answer:
          "اساتذہ کلاس شیڈول مینج کر سکتے ہیں، اسائنمنٹس اپلوڈ کر سکتے ہیں، حاضری لگا سکتے ہیں اور والدین و طلبہ سے رابطہ کر سکتے ہیں۔",
      },
    },
    {
      en: {
        question: "Can parents and students pay fees online?",
        answer:
          "Yes, IlmWasooli includes an online fee payment system with instant confirmation.",
      },
      ur: {
        question: "کیا والدین اور طلبہ آن لائن فیس ادا کر سکتے ہیں؟",
        answer:
          "جی ہاں، علموصولی آن لائن فیس ادائیگی کا نظام فراہم کرتا ہے جس میں فوری تصدیق شامل ہے۔",
      },
    },
    {
      en: {
        question: "Does IlmWasooli support multiple languages?",
        answer:
          "Yes, IlmWasooli supports multiple languages for diverse user groups.",
      },
      ur: {
        question: "کیا IlmWasooli کثیر زبانوں کی حمایت کرتا ہے؟",
        answer:
          "جی ہاں، IlmWasooli مختلف صارفین کے لیے متعدد زبانوں کی حمایت کرتا ہے۔",
      },
    },
    {
      en: {
        question: "Is there a mobile app for IlmWasooli?",
        answer:
          "Yes, IlmWasooli offers a mobile app for Android and iOS platforms.",
      },
      ur: {
        question: "کیا IlmWasooli کی موبائل ایپ موجود ہے؟",
        answer: "جی ہاں، IlmWasooli کی اینڈرائیڈ اور آئی او ایس ایپ دستیاب ہے۔",
      },
    },
    {
      en: {
        question: "How secure is IlmWasooli?",
        answer:
          "IlmWasooli uses encryption and role-based access to keep your data safe.",
      },
      ur: {
        question: "IlmWasooli کتنا محفوظ ہے؟",
        answer:
          "IlmWasooli آپ کے ڈیٹا کو محفوظ رکھنے کے لیے انکرپشن اور رول بیسڈ ایکسیس استعمال کرتا ہے۔",
      },
    },
  ];

  return (
    <div
      className="mt-16 py-20 px-6 sm:px-16 lg:px-32 min-h-screen"
      style={{
        background:
          "radial-gradient(circle at center, #8de6cc 0%, #ffffff 90%)",
      }}
    >
      <Helmet>
        <title>FAQ - IlmWasooli</title>
        <meta
          name="description"
          content="Frequently Asked Questions about IlmWasooli, a comprehensive school management system."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="mx-auto max-w-3xl text-center mb-8">
        <h2 className="text-5xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to know about IlmWasooli.
        </p>

        {/* Language Toggle Button */}
        <div className="mt-6 flex justify-center">
          <div className="relative inline-flex items-center">
            <span className="mr-3 font-semibold text-gray-700">EN</span>
            <button
              onClick={toggleLanguage}
              className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 focus:outline-none ${
                language === "ur" ? "bg-[#2dce89]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                  language === "ur" ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span className="ml-3 font-semibold text-gray-700">اردو</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item[language].question}
            answer={item[language].answer}
            lang={language}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
