import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
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
        className="w-full flex justify-between items-center text-left text-2xl font-semibold text-gray-900 focus:outline-none"
      >
        <span className="flex items-center gap-3">
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
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// FAQ Page Component
const FAQPage = () => {
  const faqData = [
    {
      question: "What is IlmWasooli?",
      answer:
        "IlmWasooliis a comprehensive school management system that streamlines the daily operations of educational institutions, offering dedicated portals for students, parents, teachers, and administrators.",
    },
    {
      question: "What features are available in the Student Portal?",
      answer:
        "The Student Portal provides access to academic schedules, homework assignments, attendance records, grades, and notifications. Students can also interact with teachers and track their progress.",
    },
    {
      question: "How does the Parent Portal work?",
      answer:
        "The Parent Portal allows parents to monitor their child's performance, view attendance reports, communicate with teachers, and stay updated on school events and fees.",
    },
    {
      question:
        "What functionalities are available for teachers in the Teacher Portal?",
      answer:
        "Teachers can manage class schedules, upload assignments, mark attendance, submit grades, and communicate directly with students and parents via the portal.",
    },
    {
      question: "What tools does the Admin Portal provide?",
      answer:
        "The Admin Portal offers features to manage student and teacher records, class schedules, fee collection, payroll, and school event planning. It also includes dashboards for performance analytics.",
    },
    {
      question: "Can parents and students pay fees online?",
      answer:
        "Yes, IlmWasooli includes an online fee payment system that allows parents and students to make payments securely and receive instant confirmations.",
    },
    {
      question: "Does IlmWasooli support multiple languages?",
      answer:
        "Yes, IlmWasooli supports multiple languages, making it accessible for diverse user groups.",
    },
    {
      question: "How does the system handle communication between users?",
      answer:
        "IlmWasooli has a built-in messaging system that enables seamless communication between students, parents, teachers, and administrators.",
    },
    {
      question: "Is there a mobile app for IlmWasooli?",
      answer:
        "Yes, IlmWasooli offers a mobile app for Android and iOS, allowing users to access their portals on the go.",
    },
    {
      question: "How secure is IlmWasooli?",
      answer:
        "IlmWasooli prioritizes data security by implementing encryption, secure logins, and role-based access controls to ensure user information is protected at all times.",
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
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to know about WasooliPK, answered in one place.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
