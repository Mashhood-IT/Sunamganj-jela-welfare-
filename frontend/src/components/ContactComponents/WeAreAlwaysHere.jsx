import { ICONS } from "../../assets/Icons";
import ContactForm from "./ContactForm";

const cards = [
  {
    title: "Real People, Real Care",
    icons: ICONS.HeartHandshake,
    text: "People are primary at the Sunamganj Jela Welfare Association UK. When you contact, you contact real people who are concerned. We listen, we guide, and we help. Each phone call or text is important to us.",
  },
  {
    title: "A Listening Ear",
    icons: ICONS.MessageCircle,
    text: "We initiated this association in order to get people closer. That thought is still alive in the way we communicate with all those who call us. We would like you to feel a part of us and be listened to. You can contact us and ask for some help, or just want to contribute to our work, our door is open.",
  },
  {
    title: "Stay Connected, Feel Included",
    icons: ICONS.Users,
    text: "You are welcome to discuss your ideas, raise questions or tell us your story. In our opinion, every message has hope. It brings to our minds the fact that we are united together through kindness.",
  },
];

const Card = ({ title, Icon, text }) => (
  <div className="h-full group flex flex-col items-start gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100">
      <Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-700">{text}</p>
  </div>
);

const WeAreAlwaysHere = () => (
  <>
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10 py-16 px-4">
      <div className="flex flex-col lg:w-2/5 text-center lg:text-left">
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 pb-4">
          We Are Always Here
        </h2>

        <div className="flex flex-wrap gap-4 items-stretch">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`basis-full ${
                i < 2 ? "lg:basis-[calc(50%-0.5rem)]" : "lg:basis-full"
              }`}
            >
              <Card title={card.title} Icon={card.icons} text={card.text} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-xl">
        <ContactForm />
      </div>
    </div>
  </>
);

export default WeAreAlwaysHere;
