import FAQComp from "./FAQComp";
import { useState } from "react";

const FAQ = () => {
  const DATA = [
    {
      num: "01",
      title: "How your Telegram group can Benefit Me?",
      content: `I share live market charts insights and strategies to enhance your trading skills, helping you make informed decisions for better financial gains.`,
    },
    {
      num: "02",
      title: "Are The Trading Group Suitable For Beginners?",
      content: `Yes, we provide content tailored for all skill levels, including beginners. Our content covers basic concepts to advanced strategies.`,
    },
    {
      num: "03",
      title: "How often are new trades & Charts Published?",
      content: `We release fresh trades & Charts regularly, ensuring you stay updated with the latest market trends and opportunities.`,
    },
    {
      num: "04",
      title: "Can I Access Group On Mobile Devices?",
      content: `Absolutely! Our Telegram Group is mobile-friendly, allowing you to access trading content and resources on your smartphone or tablet anytime, anywhere.`,
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="container py-28">
      <div className="max-w-[80%] mx-auto ">
        <h1 className="text-center text-[40px] font-semibold my-16">
          Frequently asked questions
        </h1>
        {DATA.map((item, index) => (
          <FAQComp
            key={index}
            {...item}
            onClick={() => {
              setActive((prev) => {
                if (JSON.stringify(prev) === JSON.stringify(item)) {
                  return null;
                } else {
                  setActive(item);
                }
              });
            }}
            className={
              JSON.stringify(active) === JSON.stringify(item) ? "active" : ""
            }
          />
        ))}
      </div>
    </div>
  );
};
export default FAQ;
