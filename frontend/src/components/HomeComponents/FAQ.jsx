import { useState } from "react";
import { ICONS } from "../../assets/Icons";
import { faqs } from "../../constants/Data";

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section id="faq" className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 lg:text-lg text-md max-w-2xl mx-auto">
          Have questions about Sunamganj Jela Welfare or how your donations make an impact?
          We&apos;ve got you covered.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl  shadow-md overflow-hidden border border-gray-100"
          >
            <button
              onClick={()=> toggleFAQ(index)}
              className="w-full cursor-pointer flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <ICONS.ChevronDown
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`px-6  text-gray-700 text-sm transition-all duration-300 ease-in-out ${
                openIndex === index ? " opacity-100 pb-2 " :"max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
