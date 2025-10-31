import React from "react";
import { ICONS } from "../../assets/Icons";
import ContactForm from "./ContactForm";


const WeAreAlwaysHere = () => (
<div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-4">
    <div className=" lg:w-2/5 text-center lg:text-left">
      
      <h2 className="lg:text-4xl text-2xl font-bold mb-6 text-gray-900">We Are Always Here</h2>
      <p className="text-gray-700 leading-relaxed lg:text-md text-sm md:text-md mb-4">
        People are primary at the Sunamganj Jela Welfare Association UK. When you contact, you contact real people who are concerned. We listen, we guide, and we help. Each phone call or text is important to us.
      </p>
      <p className="text-gray-700 leading-relaxed lg:text-md text-sm md:text-md mb-4">
        We initiated this association in order to get people closer. That thought is still alive in the way we communicate with all those who call us. We would like you to feel a part of us and be listened to. You can contact us and ask for some help, or just want to contribute to our work, our door is open.
      </p>
      <p className="text-gray-700 leading-relaxed lg:text-md text-sm md:text-md">
        You are welcome to discuss your ideas, raise questions or tell us your story. In our opinion, every message has hope. It brings to our minds the fact that we are united together through kindness.
      </p>
    </div>
    <div>
      <ContactForm />
    </div>
  </div>
);

export default WeAreAlwaysHere;
