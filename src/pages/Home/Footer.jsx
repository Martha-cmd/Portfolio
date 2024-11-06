import React from "react";
import { TiStarburst } from "react-icons/ti";
import { HiSparkles } from "react-icons/hi";

const Footer = () => {
  const phoneNumber = "+2348145523042"; // Replace with your phone number
  const message = "Hello! Martha I would like to connect with you."; // Replace with your message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <main className="w-full lg:px-[180px] md:px-[50px] px-[20px]">
        <div className="bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-16 md:px-16 px-8 flex flex-col items-center min-w-full">
          <p className="font-bold text-2xl">
            Got a vision for your next big project? Let's build it together!
          </p>

          <div className="flex md:flex-row flex-col items-center gap-[0.5px] font-light text-[14px] mt-3">
            Reach out let's make it happen{" "}
            <HiSparkles className="lightgrey" size={13} />.{" "}
            <p className="pl-1 grey">
              I am available for full time and part time opportunities.
            </p>
          </div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-b from-fuchsia-500 to-violet-500 py-2 px-3 rounded-full font-medium mt-10">
              Contact me 🤩
            </button>
          </a>
        </div>
      </main>
    </>
  );
};

export default Footer;
