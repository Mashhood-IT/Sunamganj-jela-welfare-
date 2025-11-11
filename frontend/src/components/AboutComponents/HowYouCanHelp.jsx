
import { Users, HeartHandshake, HandCoins } from "lucide-react";

export default function HowYouCanHelp() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl shadow-xl bg-white/90 backdrop-blur-md p-10 md:p-14 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            How You Can Help
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            You can join us in many ways. Every bit of help creates hope.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <li className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="mb-3"><Users className="w-8 h-8 text-green-600" /></span>
              <span className="font-bold text-lg text-gray-900">Volunteer</span>
              <span className="text-gray-700 mt-2">with your time or skills.</span>
            </li>
            <li className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="mb-3"><HandCoins className="w-8 h-8 text-orange-500" /></span>
              <span className="font-bold text-lg text-gray-900">Donate</span>
              <span className="text-gray-700 mt-2">to support education and welfare projects.</span>
            </li>
            <li className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="mb-3"><HeartHandshake className="w-8 h-8 text-green-600" /></span>
              <span className="font-bold text-lg text-gray-900">Collaborate</span>
              <span className="text-gray-700 mt-2">to extend our reach to new communities.</span>
            </li>
          </ul>
          <p className="text-center text-gray-700 mb-10 text-base md:text-lg">
            Your help turns small ideas into real change. Together, we can keep kindness moving from one home to another.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">Looking Ahead</h2>
          <p className="text-center text-gray-700 mb-6 text-base md:text-lg">
            Our journey is far from over. We will keep learning, growing, and giving. We see a future where help travels faster than hardship. A future where Sunamganj and the UK Bangladeshi community stand linked through care and respect. At Sunamganj Jela Welfare Association UK, our promise is simple:
          </p>
          <p className="text-center text-green-700 font-semibold text-lg md:text-xl">
            Join us today — and let’s make tomorrow brighter together
          </p>
        </div>
      </div>
    </section>
  );
}
