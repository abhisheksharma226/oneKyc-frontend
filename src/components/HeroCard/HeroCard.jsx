import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaShieldAlt,FaLock,FaUserShield } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome,  } from "react-icons/fa6";

const ServiceData = [

  {
    title: "OneKYC Basic",
content: "₹299/year",
description:
  "Access and store your KYC records securely in one place. Ideal for individuals looking for a simple and cost-effective KYC solution.",
icon: <FaUserShield className="text-7xl" />,
aosDelay: "700",

  },

  {
   title: "OneKYC Premium",
content: "₹499/year",
description:
  "Get secure access to your verified KYC records, reusable across multiple financial institutions. Save time and simplify your transactions with advanced security and privacy features.",
icon: <FaShieldAlt className="text-7xl" />,
aosDelay: "300",

  },
  {
    title: "OneKYC Pro",
content: "₹999/year",
description:
  "Experience priority support, faster verification, and advanced features for managing your KYC securely. Perfect for businesses and frequent users needing seamless access to KYC records.",
icon: <FaLock className="text-7xl" />,
aosDelay: "500",

  },
  
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
